import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { URL_ROOT } from "../../consts/api";
import { RootState } from "../store";
import {
    setInitialState,
    setUserToken,
} from "../../pages/AuthPage/store/authSlice";
import { toaster } from "../../modules/Toast";
import { getErrorMessage, ApiError } from "../../modules/Error/apiError";

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
                    "auth/refresh-token",
                    api,
                    extraOptions
                );
                if (refreshResult?.data) {
                    const refreshData = refreshResult?.data as {
                        token: string;
                    };
                    api.dispatch(setUserToken(refreshData.token));
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
        console.error("baseQuery", result.error);
        toaster.error(getErrorMessage(result.error as ApiError));
    }

    return result;
};

export const baseQueryWithReAuthToastErrors: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQueryWithReAuth(args, api, extraOptions);
    if (result?.error) {
        console.error("baseQueryWithReAuthToasts", result.error);
        toaster.error(getErrorMessage(result.error as ApiError));
    }

    return result;
};
