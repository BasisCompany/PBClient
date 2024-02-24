import { Comment } from "../model/types";
import { PageRequest, PageResponse } from "@/shared/types/pagination.type";
import { ReplySchema } from "@/pages/ProfilePage/ProfileTabs/ProfileComments/ProfileComment/CommentReply/ReplyInput";

export type AddReplyRequest = ReplySchema & { commentId: number };

export interface CommentsRequest extends PageRequest {
    id: string;
}

export type CommentsResponse = PageResponse<Comment>;

export interface AddLikeRequest {
    commentId: number;
    type: boolean;
    isReply: boolean;
}
export interface DeleteLikeRequest {
    commentId: number;
    isReply: boolean;
}
