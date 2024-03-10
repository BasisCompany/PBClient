import { Device, UserAbout } from "../model/types";
import { URL_ROOT } from "@/shared/api/config";
import { baseApi } from "@/shared/api";
import { toaster } from "@/app/providers/Toast";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
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
        getUserDevices: build.query<Device[], void>({
            query: () => "device/user",
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
    }),
});

export const {
    useGetUserDevicesQuery,
    useUserAboutQuery,
    useUpdateAvatarMutation,
    useDeleteAvatarMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
} = userApi;
