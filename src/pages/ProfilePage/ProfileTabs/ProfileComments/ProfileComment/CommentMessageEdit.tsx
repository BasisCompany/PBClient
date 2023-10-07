import { FC } from "react";
import { Box, Button, ButtonProps, InputBase, styled } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FlexBox } from "../../../../../UI/FlexBox";
import { Comment } from "../../../../../types/comments.type";
import { useEditCommentMutation } from "../store/profileCommentsApi";
import {
    getErrorMessage,
    ApiError,
} from "../../../../../modules/Error/apiError";
import { ReplySchema } from "./CommentReply/ReplyInput";
import { useSnackbar } from "../../../../../UI/Snackbar/useSnackbar";

const CancelButton = styled((props: ButtonProps) => (
    <Button size="small" disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontSize: 14,
    fontWeight: 400,
    paddingTop: "4px",
    marginTop: "8px",
    backgroundColor: theme.palette.bgcolor.primary.main,
    color: theme.palette.text.primary,
    ":hover": {
        color: theme.palette.text.secondary,
    },
}));

const commentSchema = object({
    message: string()
        .required("Пожалуйста, укажите комментарий")
        .max(800, "Комментарий должен содержать менее 800 символов."),
});
export type CommentSchema = InferType<typeof commentSchema>;

interface CommentMessageEditProps {
    comment: Comment;
    toggleEditMode: () => void;
}

export const CommentMessageEdit: FC<CommentMessageEditProps> = ({
    comment,
    toggleEditMode,
}) => {
    const [showAlert] = useSnackbar();

    const [editComment] = useEditCommentMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CommentSchema>({
        defaultValues: {
            message: comment.message,
        },
        mode: "onSubmit",
        resolver: yupResolver(commentSchema),
    });

    const onSubmit: SubmitHandler<ReplySchema> = async (data) => {
        const body = {
            rating: 5,
            message: data.message,
        };
        try {
            await editComment({ id: comment.id, body }).unwrap();
            toggleEditMode();
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.log(error);
        }
    };
    const isLoading = false;
    return (
        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
            <Box sx={{ mt: 1 }}>
                <InputBase
                    multiline
                    fullWidth
                    disabled={isLoading}
                    placeholder="Введите комментарий"
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
                <FlexBox
                    sx={{
                        position: "absolute",
                        right: "8px",
                        justifyContent: "flex-end",
                    }}
                >
                    <CancelButton onClick={toggleEditMode}>Отмена</CancelButton>
                    <CancelButton
                        type="submit"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.secondary.main,
                            ml: 1,
                        }}
                    >
                        Сохранить
                    </CancelButton>
                </FlexBox>
            </Box>
        </form>
    );
};
