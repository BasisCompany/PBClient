import { User } from "./user.type";

export interface CommentsRequest  {
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
    commentsLikes: any; // TODO: Likes
    user: User;
}

export interface Comment extends BaseComment {
    replyId: number | null;
    reply: Reply | null;
}

export interface Reply extends BaseComment {
    replyId: null;
}
