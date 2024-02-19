import { createApi } from "@reduxjs/toolkit/query/react";
import { UserAbout } from "../../../types/user.type";
import { URL_ROOT } from "../../../shared/api/config";
import { baseQueryWithReAuthToastErrors } from "../../../shared/api";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: baseQueryWithReAuthToastErrors,
    tagTypes: ["Comment", "Notification"],
    endpoints: (builder) => ({
        userAbout: builder.query<UserAbout, string>({
            query: (id) => `user/about/${id}`,
            transformResponse: (response: UserAbout) => {
                response.avatar = response.avatar
                    ? `${URL_ROOT}/${response.avatar}`
                    : undefined;
                return response;
            },
        }),
    }),
});

export const { useUserAboutQuery } = profileApi;
