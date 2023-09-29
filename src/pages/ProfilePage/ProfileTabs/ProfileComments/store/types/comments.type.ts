export type CommentsResponse = {
    sort: string;
    page: number;
    take: number;
};

export type CommentsRequest = {
    data: Comment[];
    meta: {
        currentPage: number;
        take: number;
        totalItems: number;
        totalPages: number;
    };
};

export type Comment = {
    id: number;
    message: string;
    rating: number;
    likes: number;
    dislikes: number;
    isReply: boolean;
    createdAt: string;
    updatedAt: string;
    userId: number;
    replyId: number | null;
    user: {
        id: number;
        email: string;
        username: string;
    };
    commentsLikes: any; //TODO:Likes
    reply: {
        id: number;
        message: string;
        rating: number;
        likes: number;
        dislikes: number;
        isReply: boolean;
        createdAt: string;
        updatedAt: string;
        userId: number;
        replyId: null;
        user: {
            id: number;
            email: string;
            username: string;
        };
    } | null;
};
