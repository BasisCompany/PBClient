import { Device } from "../../../../../types/settings.type";
import { profileApi } from "../../../store/profileApi";

const profileSettingsApi = profileApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDevices: build.query<Device[], void>({
            query: () => "device/user",
        }),
        // getComments: build.query<CommentsResponse, CommentsRequest>({
        //     query: ({ id, sort, page, take }) => ({
        //         url: `comments/user/${id}`,
        //         params: { sort, page, take },
        //     }),
        //     providesTags: (result) =>
        //         result?.data
        //             ? [
        //                   ...result.data.map(({ id }) => ({
        //                       type: "Comment" as const,
        //                       id,
        //                   })),
        //                   "Comment",
        //               ]
        //             : ["Comment"],
        // }),
        // addReply: build.mutation<void, AddReplyRequest>({
        //     query: (body) => ({
        //         url: "comments/add/reply",
        //         method: "POST",
        //         body,
        //     }),
        //     invalidatesTags: ["Comment"],
        // }),
        // deleteComment: build.mutation<void, number>({
        //     query: (id) => ({
        //         url: `comments/delete/comment/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Comment"],
        // }),
        // deleteReply: build.mutation<void, number>({
        //     query: (id) => ({
        //         url: `comments/delete/reply/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Comment"],
        // }),
    }),
});

export const { useGetUserDevicesQuery } = profileSettingsApi;
