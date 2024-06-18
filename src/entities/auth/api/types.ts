import { ResetPasswordSchema } from "@/pages/AuthPages/ResetPassword.page";
import { RegisterSchema } from "@/pages/LoginPage/RegisterCard/RegisterCard";

export interface LoginResponse {
    id: number;
    email: string;
    token: string;
    username: string;
    deviceId: number;
    roles: string[];
    thumb?: string;
}

export type RegisterRequest = Omit<RegisterSchema, "passwordConfirm">;

export type ResetPasswordRequest = {
    resetPasswordToken: string;
} & Omit<ResetPasswordSchema, "passwordConfirm">;

export interface CheckResponse {
    available: boolean;
}
