import { object, string, ref, InferType } from "yup";

export const resetPasswordSchema = object({
    password: string()
        .required("Пожалуйста, укажите свой пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    passwordConfirm: string()
        .required("Пожалуйста, подтвердите пароль.")
        .oneOf([ref("password")], "Пароли должны совпадать"),
});

export type ResetPasswordSchema = InferType<typeof resetPasswordSchema>;
