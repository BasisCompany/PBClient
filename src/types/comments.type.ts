import { PageRequest, PageResponse } from "./page.type";
import { User } from "./user.type";

export interface CommentsRequest extends PageRequest {
    id: string;
}

export type CommentsResponse = PageResponse<Comment>;

export interface BaseComment {
    id: number;
    message: string;
    rating: number;
    likes: number;
    dislikes: number;
    isReply: boolean;
    createdAt: string;
    updatedAt: string;
    userId: number;
    current_mark: boolean | null;
    user: User;
}

export interface Comment extends BaseComment {
    replyId: number | null;
    reply: Reply | null;
}

export interface Reply extends BaseComment {
    replyId: null;
}
