import { PatchCollection } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { Notification } from "../model/types";
import { NotificationCount } from "./types";
import { baseApi } from "@/shared/api";
import { PageRequest, PageResponse } from "@/shared/types/pagination.type";

export const notificationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<PageResponse<Notification>, PageRequest>({
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
        countUnreadNotifications: build.query<NotificationCount, void>({
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
                const queryCache = notificationApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Notification" }]
                );

                const updateNotifications = (
                    draft: PageResponse<Notification>,
                    sort: string
                ) => {
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
                    const args = originalArgs as PageRequest;
                    patches.push(
                        dispatch(
                            notificationApi.util.updateQueryData(
                                "getNotifications",
                                args,
                                (draft: PageResponse<Notification>) =>
                                    updateNotifications(draft, args.sort)
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
                const queryCache = notificationApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Notification" }]
                );

                const updateNotifications = (
                    draft: PageResponse<Notification>,
                    sort: string
                ) => {
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
                    const args = originalArgs as PageRequest;
                    patches.push(
                        dispatch(
                            notificationApi.util.updateQueryData(
                                "getNotifications",
                                args,
                                (draft: PageResponse<Notification>) =>
                                    updateNotifications(draft, args.sort)
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
} = notificationApi;
