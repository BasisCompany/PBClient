import { Device, UserAbout } from "../model/types";
import { URL_ROOT } from "@/shared/api/config";
import { baseApi } from "@/shared/api";

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
            invalidatesTags: ["User"],
        }),
        deleteAvatar: build.mutation<void, void>({
            query: () => ({
                url: "user/avatar",
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),
        updateBanner: build.mutation<void, FormData>({
            query: (body) => ({
                url: "user/banner",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        deleteBanner: build.mutation<void, void>({
            query: () => ({
                url: "user/banner",
                method: "DELETE",
            }),
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
