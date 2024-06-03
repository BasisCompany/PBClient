import { Gender, NotificationType } from "../model/types";

export interface UserResponse {
    id: number;
    email: string;
    username: string;
    deviceId: number;
    roles: string[];
    thumb?: string;
}

export interface UpdateProfileRequest {
    email?: string;
    gender?: Gender;
    about?: string | null;
}

export interface NotificationSettingResponse {
    type: NotificationType;
    site: boolean;
    email: boolean;
}

export interface UpdateNotificationSettingsRequest {
    notificationType: NotificationType;
    siteEnabled?: boolean;
    emailEnabled?: boolean;
}

export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}
