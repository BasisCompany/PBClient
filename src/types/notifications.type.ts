import { PageRequest, PageResponse } from "./page.type";

export type NotificationsRequest = PageRequest;

export type NotificationsResponse = PageResponse<Notification>;

export enum NotifActivityType {
    FRIEND_REQUEST = "FRIEND_REQUEST",
    PROMPT_COMMENT = "PROMPT_COMMENT",
    PROMPT_PURCHASE = "PROMPT_PURCHASE",
}

export interface Notification {
    id: number;
    promptId: number;
    activityType: NotifActivityType;
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
