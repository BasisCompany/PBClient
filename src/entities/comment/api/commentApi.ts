import { Comment } from "../model/types";
import {
    AddReplyRequest,
    AddLikeRequest,
    DeleteLikeRequest,
    CommentsRequest,
} from "./types";
import { PageResponse } from "@/types/page.type";
import { baseApi } from "@/shared/api";

export const commentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getComments: build.query<PageResponse<Comment>, CommentsRequest>({
            query: ({ id, sort, page, take }) => ({
                url: `comments/user/${id}`,
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
        addLike: build.mutation<void, AddLikeRequest>({
            query: ({ isReply: _, ...body }) => ({
                url: "comments/add/like",
                method: "POST",
                body,
            }),
            onQueryStarted(
                { isReply, ...body },
                { dispatch, queryFulfilled, getState }
            ) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { originalArgs } = commentApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Comment" }]
                )[0];

                const updateCommentLikes = (draft: PageResponse<Comment>) => {
                    const comment = isReply
                        ? draft.data.find(
                              (comment) => comment.replyId === body.commentId
                          )?.reply
                        : draft.data.find(
                              (comment) => comment.id === body.commentId
                          );

                    if (comment) {
                        if (body.type) {
                            comment.likes += 1;
                            if (comment.current_mark !== null) {
                                comment.dislikes -= 1;
                            }
                            comment.current_mark = true;
                        } else {
                            comment.dislikes += 1;
                            if (comment.current_mark !== null) {
                                comment.likes -= 1;
                            }
                            comment.current_mark = false;
                        }
                    }
                };

                const patchResult = dispatch(
                    commentApi.util.updateQueryData(
                        "getComments",
                        originalArgs as CommentsRequest,
                        updateCommentLikes
                    )
                );
                queryFulfilled.catch(patchResult.undo);
            },
        }),
        deleteLike: build.mutation<void, DeleteLikeRequest>({
            query: ({ commentId }) => ({
                url: `comments/delete/like/${commentId}`,
                method: "DELETE",
            }),
            onQueryStarted(
                { commentId, isReply },
                { dispatch, queryFulfilled, getState }
            ) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { originalArgs } = commentApi.util.selectInvalidatedBy(
                    getState(),
                    [{ type: "Comment" }]
                )[0];

                const updateCommentLikes = (draft: PageResponse<Comment>) => {
                    const comment = isReply
                        ? draft.data.find(
                              (comment) => comment.replyId === commentId
                          )?.reply
                        : draft.data.find(
                              (comment) => comment.id === commentId
                          );

                    if (comment) {
                        if (comment.current_mark === true) {
                            comment.likes -= 1;
                        } else {
                            comment.dislikes -= 1;
                        }
                        comment.current_mark = null;
                    }
                };

                const patchResult = dispatch(
                    commentApi.util.updateQueryData(
                        "getComments",
                        originalArgs as CommentsRequest,
                        updateCommentLikes
                    )
                );
                queryFulfilled.catch(patchResult.undo);
            },
        }),
    }),
});

export const {
    useGetCommentsQuery,
    useAddReplyMutation,
    useDeleteCommentMutation,
    useDeleteReplyMutation,
    useAddLikeMutation,
    useDeleteLikeMutation,
} = commentApi;
