import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../../../redux/api/baseQuery";
import { UserAbout } from "../../../types/user.type";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["Comment"],
    endpoints: (builder) => ({
        userAbout: builder.query<UserAbout, string>({
            query: (id) => `user/about/${id}`,
        }),
    }),
});

export const { useUserAboutQuery } = profileApi;
