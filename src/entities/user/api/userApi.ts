import { Device, UserProfile } from "../model/types";
import { UpdateProfileRequest, UserResponse } from "./types";
import { baseApi } from "@/shared/api";
import { toaster } from "@/app/providers/Toast";
import { getUrlRoot } from "@/shared/utils/getUrlRoot";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        user: build.query<UserResponse, void>({
            query: () => "user",
            transformResponse: (response: UserResponse) => ({
                ...response,
                thumb: getUrlRoot(response.thumb),
            }),
            providesTags: ["User"],
        }),
        userProfile: build.query<UserProfile, string>({
            query: (id) => `user/profile/${id}`,
            transformResponse: (response: UserProfile) => ({
                ...response,
                avatar: getUrlRoot(response.avatar),
                banner: getUrlRoot(response.banner),
            }),
            providesTags: ["User"],
        }),
        updateAvatar: build.mutation<void, FormData>({
            query: (body) => ({
                url: "user/avatar",
                method: "POST",
                body,
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    toaster.success("Аватарка изменена!");
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        deleteAvatar: build.mutation<void, void>({
            query: () => ({
                url: "user/avatar",
                method: "DELETE",
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    toaster.success("Аватарка удалена!");
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        updateBanner: build.mutation<void, FormData>({
            query: (body) => ({
                url: "user/banner",
                method: "POST",
                body,
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    toaster.success("Баннер изменен!");
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        deleteBanner: build.mutation<void, void>({
            query: () => ({
                url: "user/banner",
                method: "DELETE",
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    toaster.success("Баннер удален!");
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        updateProfile: build.mutation<void, UpdateProfileRequest>({
            query: (body) => ({
                url: "user/profile",
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        getUserSessions: build.query<Device[], void>({
            query: () => "session/user",
            providesTags: ["Session"],
        }),
        deleteUserSessionsExcept: build.mutation<void, number>({
            query: (sessionId) => ({
                url: `session/user/${sessionId}/except`,
                method: "DELETE",
            }),
            invalidatesTags: ["Session"],
        }),
    }),
});

export const {
    useUserQuery,
    useGetUserSessionsQuery,
    useDeleteUserSessionsExceptMutation,
    useUserProfileQuery,
    useUpdateAvatarMutation,
    useDeleteAvatarMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
    useUpdateProfileMutation,
} = userApi;
