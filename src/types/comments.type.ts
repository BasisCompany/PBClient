import { User } from "./user.type";

export interface CommentsRequest {
    id: string;
    sort: string;
    page: number;
    take: number;
}

export interface CommentsResponse {
    data: Comment[];
    meta: {
        currentPage: number;
        take: number;
        totalItems: number;
        totalPages: number;
    };
}

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
