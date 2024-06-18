import { object, string, mixed, InferType } from "yup";
import { Gender } from "@/entities/user";

export const changeUserInformation = object({
    username: string()
        .required("Пожалуйста, укажите свой никнейм.")
        .min(3, "Никнейм должен быть больше 3 символов")
        .max(20, "Никнейм должен быть меньше 20 символов")
        .matches(
            /^[a-zA-Z0-9_-]*$/,
            "Вы можете использовать только a-z, 0-9 и нижнее подчёркивание"
        ),

    gender: mixed<Gender>().oneOf(Object.values(Gender)).required(),
    about: string()
        .nullable()
        .default("")
        .max(500, "Превышено количество символов"),
});

export type ChangeUserInformation = InferType<typeof changeUserInformation>;
