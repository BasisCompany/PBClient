import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../../../redux/api/baseQuery";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        //TODO: Delete
        me: builder.query<void, void>({
            query: () => `auth/me`,
        }),
    }),
});

export const { useLazyMeQuery } = profileApi;
