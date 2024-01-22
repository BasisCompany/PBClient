import { PatchCollection } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import {
    NotificationsResponse as NotifResponse,
    NotificationsRequest as NotifRequest,
    NotifCount,
} from "../../../../../types/notifications.type";
import { profileApi } from "../../../store/profileApi";

const profileNotifApi = profileApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotifResponse, NotifRequest>({
            query: ({ sort, page, take }) => ({
                url: `notifications/user/`,
                params: { sort, page, take },
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: "Notification" as const,
                              id,
                          })),
                          { type: "Notification", id: "PARTIAL-LIST" },
                      ]
                    : [{ type: "Notification", id: "PARTIAL-LIST" }],
        }),
        countUnreadNotifications: build.query<NotifCount, void>({
            query: () => "notifications/user/count",
            providesTags: [{ type: "Notification", id: "COUNT" }],
        }),
        readAllNotifications: build.mutation<void, void>({
            query: () => ({
                url: "notifications/read-all",
                method: "GET",
            }),
            invalidatesTags: () => [
                { type: "Notification", id: "COUNT" },
                { type: "Notification", id: "PARTIAL-LIST" },
            ],
            onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
                const queryCache = profileNotifApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Notification" }]
                );

                const updateNotifs = (draft: NotifResponse, sort: string) => {
                    draft.data.forEach((notification) => {
                        notification.isRead = true;
                        return notification;
                    });

                    if (sort === "unread") {
                        draft.data = [];
                    }
                };

                const patches: PatchCollection[] = [];

                for (const { originalArgs } of queryCache) {
                    const args = originalArgs as NotifRequest;
                    patches.push(
                        dispatch(
                            profileNotifApi.util.updateQueryData(
                                "getNotifications",
                                args,
                                (draft: NotifResponse) =>
                                    updateNotifs(draft, args.sort)
                            )
                        )
                    );
                }

                queryFulfilled.catch(() =>
                    patches.forEach((patch) => {
                        patch.undo();
                    })
                );
            },
        }),
        readNotification: build.mutation<void, number>({
            query: (id) => ({
                url: `notifications/read/${id}`,
                method: "GET",
            }),
            invalidatesTags: (_, __, id) => [
                { type: "Notification", id: "COUNT" },
                { type: "Notification", id },
                { type: "Notification", id: "PARTIAL-LIST" },
            ],
            onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                const queryCache = profileNotifApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Notification" }]
                );

                const updateNotif = (draft: NotifResponse, sort: string) => {
                    const notification = draft.data.find(
                        (notification) => notification.id === id
                    );
                    if (notification) {
                        notification.isRead = true;

                        if (sort === "unread") {
                            draft.data = draft.data.filter(
                                (notification) => notification.id !== id
                            );
                        }
                    }
                };

                const patches: PatchCollection[] = [];

                for (const { originalArgs } of queryCache) {
                    const args = originalArgs as NotifRequest;
                    patches.push(
                        dispatch(
                            profileNotifApi.util.updateQueryData(
                                "getNotifications",
                                args,
                                (draft: NotifResponse) =>
                                    updateNotif(draft, args.sort)
                            )
                        )
                    );
                }

                queryFulfilled.catch(() =>
                    patches.forEach((patch) => {
                        patch.undo();
                    })
                );
            },
        }),
    }),
});

export const {
    useGetNotificationsQuery,
    useCountUnreadNotificationsQuery,
    useReadAllNotificationsMutation,
    useReadNotificationMutation,
} = profileNotifApi;
