import { object, string, InferType } from "yup";

export const forgotPasswordSchema = object({
    email: string()
        .required("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
});

export type ForgotPasswordSchema = InferType<typeof forgotPasswordSchema>;
