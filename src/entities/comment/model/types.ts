import { PromptTitle } from "@/entities/prompt";
import { User } from "@/entities/user";

interface BaseComment {
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
    prompt: PromptTitle;
}

export interface Comment extends BaseComment {
    replyId: number | null;
    reply: Reply | null;
}

export interface Reply extends BaseComment {
    replyId: null;
}
