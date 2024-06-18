import { RegisterSchema, ResetPasswordSchema } from "@/shared/schema";

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
