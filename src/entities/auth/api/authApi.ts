import { createApi } from "@reduxjs/toolkit/query/react";
import { setInitialState } from "../model/authSlice";
import {
    CheckResponse,
    LoginResponse,
    RegisterRequest,
    ResetPasswordRequest,
} from "./types";
import { baseQueryWithToastErrors, baseApi } from "@/shared/api";
import { getUrlRoot } from "@/shared/utils/getUrlRoot";
import { LoginSchema } from "@/shared/schema";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithToastErrors,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginSchema>({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body,
                credentials: "include",
            }),
            transformResponse: (response: LoginResponse) => ({
                ...response,
                thumb: getUrlRoot(response.thumb),
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(baseApi.util.resetApiState());
                } catch (error) {
                    /* empty */
                }
            },
        }),
        register: builder.mutation<void, RegisterRequest>({
            query: (body) => ({
                url: "auth/register",
                method: "POST",
                body,
            }),
        }),
        forgotPassword: builder.query<void, string>({
            query: (email) => `auth/forgot-password/${email}`,
        }),
        resetPassword: builder.mutation<void, ResetPasswordRequest>({
            query: (body) => ({
                url: "auth/reset-password",
                method: "POST",
                body,
            }),
        }),
        logout: builder.query<void, void>({
            query: () => ({
                url: "auth/logout",
                credentials: "include",
            }),
            onQueryStarted(_, { dispatch }) {
                dispatch(setInitialState());
                dispatch(baseApi.util.resetApiState());
            },
        }),
        checkEmail: builder.query<CheckResponse, string>({
            query: (email) => `auth/check-email?email=${email}`,
        }),
        checkUsername: builder.query<CheckResponse, string>({
            query: (email) => `auth/check-username?username=${email}`,
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLazyForgotPasswordQuery,
    useResetPasswordMutation,
    useLazyLogoutQuery,
    useLazyCheckEmailQuery,
    useLazyCheckUsernameQuery,
} = authApi;
