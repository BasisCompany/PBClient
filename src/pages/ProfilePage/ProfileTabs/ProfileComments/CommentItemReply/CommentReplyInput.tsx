import { Box, IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "../../../../../UI/Snackbar/useSnackbar";
import { object, string, InferType } from "yup";
import {
    getErrorMessage,
    ApiError,
} from "../../../../../modules/Error/apiError";
import { yupResolver } from "@hookform/resolvers/yup";

const replySchema = object({
    message: string().required("Пожалуйста, укажите свою почту."),
});
export type ReplySchema = InferType<typeof replySchema>;


export const CommentReplyInput = () => {
    const [showAlert] = useSnackbar();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ReplySchema>({
        mode: "onBlur",
        resolver: yupResolver(replySchema),
    });

    if (errors?.message?.message) {
        showAlert("error", errors?.message?.message);
    }

    const onSubmit: SubmitHandler<ReplySchema> = (data) => {
        console.log(data);
        try {
            //await login(data).unwrap();
            reset();
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.log(error);
        }
    };
    return (
        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
            <Box sx={{ mt: 1, ml: 6, display: "flex" }}>
                <InputBase
                    multiline
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
                    <SendIcon
                        sx={{
                            width: "35px",
                            height: "35px",
                            color: (theme) => theme.palette.text.secondary,
                            transition: "all 0.1s ease-in",
                            ":hover": {
                                color: (theme) => theme.palette.text.primary,
                                transition: "all 0.1s ease-out",
                            },
                        }}
                    />
                </IconButton>
            </Box>
        </form>
    );
};
