import { profileApi } from "../../../store/profileApi";
import {
    CommentsRequest,
    CommentsResponse,
} from "../../../../../types/comments.type";
import { ReplySchema } from "../ProfileComment/CommentReply/ReplyInput";

type AddReplyRequest = ReplySchema & { commentId: number };

const profileCommentsApi = profileApi.injectEndpoints({
    endpoints: (build) => ({
        getComments: build.query<CommentsResponse, CommentsRequest>({
            query: ({ sort, page, take }) => ({
                url: "comments/user",
                params: { sort, page, take },
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: "Comment" as const,
                              id,
                          })),
                          "Comment",
                      ]
                    : ["Comment"],
        }),
        addReply: build.mutation<void, AddReplyRequest>({
            query: (body) => ({
                url: "comments/add/reply",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Comment"],
        }),
        deleteComment: build.mutation<void, number>({
            query: (id) => ({
                url: `comments/delete/comment/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment"],
        }),
        deleteReply: build.mutation<void, number>({
            query: (id) => ({
                url: `comments/delete/reply/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment"],
        }),
    }),
});

export const {
    useGetCommentsQuery,
    useAddReplyMutation,
    useDeleteCommentMutation,
    useDeleteReplyMutation,
} = profileCommentsApi;
