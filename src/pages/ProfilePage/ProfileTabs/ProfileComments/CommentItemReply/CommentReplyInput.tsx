import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const CommentReplyInput = () => {
    return (
        <Box sx={{ mt: 1, ml: 6 }}>
            <TextField multiline fullWidth placeholder="Введите ответ" />
            <Button
                endIcon={<SendIcon />}
                sx={{
                    mt: 1,
                    textTransform: "none",
                    fontSize: 14,
                    fontWeight: 400,
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                    ":hover": {
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.hover,
                    },
                    color: (theme) => theme.palette.text.primary,
                }}
            >
                Ответить
            </Button>
        </Box>
    );
};
