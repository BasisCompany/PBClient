export enum Gender {
    NOT_SPECIFIED = "NOT_SPECIFIED",
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export interface User {
    id: number;
    email: string;
    username: string;
    avatar?: string;
}

export interface UserProfile {
    id: number;
    username: string;
    gender: Gender;
    about: string | null;
    avatar?: string;
    banner?: string;
}

export interface UserDetails {
    id: number;
    email: string;
    username: string;
    roles: string[];
    thumb?: string;
}

export enum NotificationType {
    PROMPT_COMMENT = "PROMPT_COMMENT",
    PROMPT_PURCHASE = "PROMPT_PURCHASE",
    PROMPT_FAVORITE = "PROMPT_FAVORITE",
    COMMENT_REPLY = "COMMENT_REPLY",
}

export interface NotificationSetting {
    type: NotificationType;
    site: boolean;
    email: boolean;
    label: string;
    description: string;
}

export interface Device {
    ip: string;
    id: number;
    city: string;
    device: "desktop" | "smartphone" | "tablet";
    client: string;
    platform: string;
    lastLogin: string;
}
