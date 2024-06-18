import { FC } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAddReplyMutation } from "@/entities/comment";
import { ReplySchema, replySchema } from "@/shared/schema";
import { ExtSubmitHandler, Form, InputText } from "@/shared/ui/Forms";

interface ReplyInputProps {
    commentId: number;
}

export const ReplyInput: FC<ReplyInputProps> = ({ commentId }) => {
    const [addReply, { isLoading }] = useAddReplyMutation();

    const onSubmit: ExtSubmitHandler<ReplySchema> = async (data, { reset }) => {
        try {
            await addReply({
                commentId,
                message: data.message,
            }).unwrap();
            reset();
        } catch (e) {
            /* empty */
        }
    };

    return (
        <Form<ReplySchema> onSubmit={onSubmit} schema={replySchema}>
            <Box sx={{ mt: 1, ml: 6, display: "flex" }}>
                <InputText
                    name="message"
                    placeholder="Введите ответ"
                    counter
                    inputProps={{ maxLength: 800 }}
                    autoFocus
                    multiline
                    helperText="none"
                    margin="none"
                    disabled={isLoading}
                    sx={{
                        mr: 1,
                        borderRadius: "5px",
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.main,
                        transition: "all 0.1s ease-in",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.bgcolor.secondary.main,
                            },
                            "&:hover fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.bgcolor.secondary.hover,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.bgcolor.secondary.active,
                            },
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
        </Form>
    );
};
