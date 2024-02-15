import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginSchema } from "../components/LoginForm";
import { RegisterSchema } from "../components/RegisterForm";
import { ResetPasswordSchema } from "../ResetPassword.page";
import {
    baseQueryWithReAuth,
    baseQueryWithToastErrors,
} from "./../../../redux/api/baseQuery";
import { setInitialState } from "./authSlice";

interface LoginResponse {
    id: number;
    email: string;
    token: string;
    username: string;
    deviceId: number;
    roles: string[];
}

type LoginRequest = LoginSchema;

type RegisterRequest = Omit<RegisterSchema, "passwordConfirm">;

type ResetPasswordRequest = {
    resetPasswordToken: string;
} & Omit<ResetPasswordSchema, "passwordConfirm">;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithToastErrors,
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
