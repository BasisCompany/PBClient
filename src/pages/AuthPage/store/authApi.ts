import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../redux/api/baseQuery";
import { LoginSchema } from "../LoginForm";

interface LoginResponse {
    id: number;
    email: string;
    token: string;
    username: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginSchema>({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
