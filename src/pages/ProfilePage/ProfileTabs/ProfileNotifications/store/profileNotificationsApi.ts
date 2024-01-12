import {
    NotificationsResponse,
    NotificationsRequest,
} from "../../../../../types/notifications.type";
import { profileApi } from "../../../store/profileApi";

const profileNotificationsApi = profileApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<
            NotificationsResponse,
            NotificationsRequest
        >({
            query: ({ sort, page, take }) => ({
                url: `notifications/user/`,
                params: { sort, page, take },
            }),
        }),
    }),
});

export const { useGetNotificationsQuery } = profileNotificationsApi;
