import { PageRequest, PageResponse } from "./page.type";

export type NotificationsRequest = PageRequest;

export type NotificationsResponse = PageResponse<Notification>;

export interface Notification {
    id: number;
    promptId: number;
    activityType: string;
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
