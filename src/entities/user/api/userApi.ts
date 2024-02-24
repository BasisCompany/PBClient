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
                return response;
            },
        }),
        getUserDevices: build.query<Device[], void>({
            query: () => "device/user",
        }),
    }),
});

export const { useGetUserDevicesQuery, useUserAboutQuery } = userApi;
