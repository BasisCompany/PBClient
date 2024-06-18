import { object, string, ref, InferType } from "yup";

export const changePasswordSchema = object({
    oldPassword: string()
        .required("Пожалуйста, укажите свой старый пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    newPassword: string()
        .required("Пожалуйста, укажите новый пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    newPasswordConfirm: string()
        .required("Пожалуйста, подтвердите новый пароль.")
        .oneOf([ref("newPassword")], "Пароли должны совпадать"),
});

export type ChangePasswordSchema = InferType<typeof changePasswordSchema>;
