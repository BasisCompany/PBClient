import { Gender } from "../model/types";

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
