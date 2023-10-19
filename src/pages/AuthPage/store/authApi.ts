import { baseQuery, baseQueryWithReAuth } from "./../../../redux/api/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginSchema } from "../components/LoginForm";
import { RegisterSchema } from "../components/RegisterForm";
import { ResetPasswordSchema } from "../ResetPassword.page";

type LoginResponse = {
    id: number;
    email: string;
    token: string;
    username: string;
    roles: string[];
};

type LoginRequest = LoginSchema;

type RegisterRequest = Omit<RegisterSchema, "passwordConfirm">;

type ResetPasswordRequest = {
    resetPasswordToken: string;
} & Omit<ResetPasswordSchema, "passwordConfirm">;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
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
} = authApi;

export const { useLazyMeQuery, useMeQuery } = initAuthApi;
