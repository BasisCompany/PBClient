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

export const baseQuery = fetchBaseQuery({
    baseUrl: URL_ROOT,
});

export const baseQueryWithCredentials = fetchBaseQuery({
    baseUrl: URL_ROOT,
    credentials: "include",
});

export const baseQueryWithAuth = fetchBaseQuery({
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
    // wait until the mutex is available without locking it
    await reAuthMutex.waitForUnlock();

    let result = await baseQueryWithAuth(args, api, extraOptions);
    if (result?.error && result?.error?.status === 401) {
        // checking whether the mutex is locked
        if (!reAuthMutex.isLocked()) {
            const releaseMutex = await reAuthMutex.acquire();

            try {
                // try to get a new token
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
                    // retry the initial query
                    result = await baseQueryWithAuth(args, api, extraOptions);
                } else {
                    api.dispatch(setInitialState());
                }
            } finally {
                // release must be called once the mutex should be released again.
                releaseMutex();
            }
        } else {
            // wait until the mutex is available without locking it
            await reAuthMutex.waitForUnlock();
            result = await baseQueryWithAuth(args, api, extraOptions);
        }
    }
    return result;
};
