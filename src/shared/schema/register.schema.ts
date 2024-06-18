import { object, string, ref, InferType } from "yup";

export const registerSchema = object({
    username: string()
        .required("Пожалуйста, укажите свой никнейм.")
        .min(3, "Никнейм должен быть больше 3 символов")
        .max(20, "Никнейм должен быть меньше 20 символов"),
    email: string()
        .required("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
    password: string()
        .required("Пожалуйста, укажите свой пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    passwordConfirm: string()
        .required("Пожалуйста, подтвердите пароль.")
        .oneOf([ref("password")], "Пароли должны совпадать"),
});

export type RegisterSchema = InferType<typeof registerSchema>;
