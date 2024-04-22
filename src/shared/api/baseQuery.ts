import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { URL_ROOT } from "./config";
import { getUserErrorMessage, ApiError } from "./error/apiError";
import { setUserToken, setInitialState } from "@/entities/auth";
import { toaster } from "@/app/providers/Toast";
import { RootState } from "@/app/appStore";

export const baseQuery = fetchBaseQuery({
    baseUrl: URL_ROOT,
});

const baseQueryWithCredentials = fetchBaseQuery({
    baseUrl: URL_ROOT,
    credentials: "include",
});

const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: URL_ROOT,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const reAuthMutex = new Mutex();
export const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await reAuthMutex.waitForUnlock();

    let result = await baseQueryWithAuth(args, api, extraOptions);

    if (result?.error && result?.error?.status === 401) {
        if (!reAuthMutex.isLocked()) {
            const releaseMutex = await reAuthMutex.acquire();
            try {
                const refreshResult = await baseQueryWithCredentials(
                    "auth/refresh",
                    api,
                    extraOptions
                );
                if (refreshResult?.data) {
                    const refreshData = refreshResult?.data as {
                        token: string;
                        deviceId: number;
                    };
                    api.dispatch(
                        setUserToken({
                            token: refreshData.token,
                            deviceId: refreshData.deviceId,
                        })
                    );
                    result = await baseQueryWithAuth(args, api, extraOptions);
                } else {
                    api.dispatch(setInitialState());
                }
            } finally {
                releaseMutex();
            }
        } else {
            await reAuthMutex.waitForUnlock();
            result = await baseQueryWithAuth(args, api, extraOptions);
        }
    }
    return result;
};

export const baseQueryWithToastErrors: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error) {
        toaster.error(getUserErrorMessage(result.error as ApiError));
    }

    return result;
};

const endpointsExceptions = ["user", "userProfile", "updateProfile"];

export const baseQueryWithReAuthToastErrors: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQueryWithReAuth(args, api, extraOptions);
    if (result?.error && !endpointsExceptions.includes(api.endpoint)) {
        toaster.error(getUserErrorMessage(result.error as ApiError));
    }

    return result;
};
