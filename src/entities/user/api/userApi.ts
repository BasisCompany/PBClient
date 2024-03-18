import { Device, UserAbout } from "../model/types";
import { UserResponse } from "./types";
import { URL_ROOT } from "@/shared/api/config";
import { baseApi, baseQueryWithReAuth } from "@/shared/api";
import { toaster } from "@/app/providers/Toast";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        user: build.query<UserResponse, void>({
            queryFn: async (_arg, queryApi, extraOptions) => {
                const result = await baseQueryWithReAuth(
                    "user",
                    queryApi,
                    extraOptions
                );

                if (result?.error) {
                    return { error: result.error };
                }

                const userResponse = result?.data as UserResponse;

                if (result?.data) {
                    (result.data as UserResponse).thumb = userResponse.thumb
                        ? `${URL_ROOT}/${userResponse.thumb}`
                        : undefined;
                }
                return { data: userResponse };
            },
        }),
        userAbout: build.query<UserAbout, string>({
            query: (id) => `user/about/${id}`,
            transformResponse: (response: UserAbout) => {
                response.avatar = response.avatar
                    ? `${URL_ROOT}/${response.avatar}`
                    : undefined;
                response.banner = response.banner
                    ? `${URL_ROOT}/${response.banner}`
                    : undefined;
                return response;
            },
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
        getUserDevices: build.query<Device[], void>({
            query: () => "device/user",
        }),
    }),
});

export const {
    useUserQuery,
    useGetUserDevicesQuery,
    useUserAboutQuery,
    useUpdateAvatarMutation,
    useDeleteAvatarMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
} = userApi;
