import { Box, CircularProgress, IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, KeyboardEvent } from "react";
import { toaster } from "@/app/providers/Toast";
import { useAddReplyMutation } from "@/entities/comment";

const replySchema = object({
    message: string()
        .required("Пожалуйста, укажите комментарий")
        .max(800, "Комментарий должен содержать менее 800 символов."),
});
export type ReplySchema = InferType<typeof replySchema>;

interface ReplyInputProps {
    commentId: number;
}

export const ReplyInput: FC<ReplyInputProps> = ({ commentId }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ReplySchema>({
        mode: "onSubmit",

        resolver: yupResolver(replySchema),
    });

    if (errors?.message?.message) {
        toaster.error(errors?.message?.message);
    }

    const handleUserKeyPress = async (e: KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            await handleSubmit(onSubmit)();
        }
    };

    const [addReply, { isLoading }] = useAddReplyMutation();

    const onSubmit: SubmitHandler<ReplySchema> = async (data) => {
        const body = {
            commentId,
            message: data.message,
        };
        await addReply(body)
            .unwrap()
            .then(() => reset);
    };

    return (
        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
            <Box sx={{ mt: 1, ml: 6, display: "flex" }}>
                <InputBase
                    autoFocus
                    multiline
                    onKeyDown={handleUserKeyPress}
                    disabled={isLoading}
                    fullWidth
                    placeholder="Введите ответ"
                    {...register("message")}
                    error={!!errors.message}
                    sx={{
                        mr: 1,
                        p: 2,
                        borderRadius: "5px",
                        color: (theme) => theme.palette.text.secondary,
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.main,
                        transition: "all 0.1s ease-in",
                        ".MuiInputBase-input::placeholder": {
                            opacity: 1,
                            transition: "all 0.1s ease-out",
                        },
                        ".MuiInputBase-input:focus": {
                            color: (theme) => theme.palette.text.primary,
                        },
                    }}
                />
                <IconButton disableRipple type="submit">
                    {isLoading ? (
                        <CircularProgress color="inherit" size={30} />
                    ) : (
                        <SendIcon
                            sx={{
                                width: "35px",
                                height: "35px",
                                color: (theme) => theme.palette.text.secondary,
                                transition: "all 0.1s ease-in",
                                ":hover": {
                                    color: (theme) =>
                                        theme.palette.text.primary,
                                    transition: "all 0.1s ease-out",
                                },
                            }}
                        />
                    )}
                </IconButton>
            </Box>
        </form>
    );
};
