export interface UserResponse {
    id: number;
    email: string;
    username: string;
    deviceId: number;
    roles: string[];
    thumb?: string;
}
