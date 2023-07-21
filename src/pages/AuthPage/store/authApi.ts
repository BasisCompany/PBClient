import { RegisterSchema } from "./../RegisterForm";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../redux/api/baseQuery";
import { LoginSchema } from "../LoginForm";

type LoginResponse = {
    id: number;
    email: string;
    token: string;
    username: string;
};

type LoginRequest = LoginSchema;

type RegisterRequest = Omit<RegisterSchema, "passwordConfirm">;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body,
            }),
        }),
        register: builder.mutation<void, RegisterRequest>({
            query: (body) => ({
                url: "auth/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
