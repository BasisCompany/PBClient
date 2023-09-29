import { profileApi } from "../../../store/profileApi";
import { CommentsRequest, CommentsResponse } from "./types/comments.type";

const profileCommentsApi = profileApi.injectEndpoints({
    endpoints: (build) => ({
        getComments: build.query<CommentsRequest, CommentsResponse>({
            query: (args) => {
                const { sort, page, take } = args;
                return { url: "comments/user", params: { sort, page, take } };
            },
        }),
    }),
});

export const { useGetCommentsQuery } = profileCommentsApi;
