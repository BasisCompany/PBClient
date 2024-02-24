export enum NotificationType {
    FRIEND_REQUEST = "FRIEND_REQUEST",
    PROMPT_COMMENT = "PROMPT_COMMENT",
    PROMPT_PURCHASE = "PROMPT_PURCHASE",
}

export interface Notification {
    id: number;
    promptId: number;
    activityType: NotificationType;
    createdAt: string;
    updatedAt: string;
    isRead: boolean;
    senderUser: {
        id: number;
        username: string;
    };
    recipientUser: {
        id: number;
        username: string;
    };
}
