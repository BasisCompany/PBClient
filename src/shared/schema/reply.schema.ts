import { object, string, InferType } from "yup";

export const replySchema = object({
    message: string()
        .required("Пожалуйста, укажите комментарий")
        .max(800, "Комментарий должен содержать менее 800 символов."),
});
export type ReplySchema = InferType<typeof replySchema>;
