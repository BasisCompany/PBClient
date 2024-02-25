import { createApi } from "@reduxjs/toolkit/query/react";
import { setInitialState } from "../model/authSlice";
import { LoginResponse, RegisterRequest, ResetPasswordRequest } from "./types";
import { baseQueryWithToastErrors, baseQueryWithReAuth } from "@/shared/api";
import { LoginSchema } from "@/pages/AuthPage/components/LoginCard";

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
            },
        }),
    }),
});

type MeResponse = Omit<LoginResponse, "token">;

export const initAuthApi = createApi({
    reducerPath: "initAuthApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        me: builder.query<MeResponse, void>({
            query: () => ({
                url: "auth/me",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLazyForgotPasswordQuery,
    useResetPasswordMutation,
    useLazyLogoutQuery,
} = authApi;

export const { useLazyMeQuery, useMeQuery } = initAuthApi;
