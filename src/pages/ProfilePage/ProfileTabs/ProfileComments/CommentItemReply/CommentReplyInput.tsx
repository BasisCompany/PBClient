import {
    Box,
    Button,
    ButtonBase,
    IconButton,
    InputBase,
    TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const CommentReplyInput = () => {
    return (
        <Box sx={{ mt: 1, ml: 6, display: "flex" }}>
            <InputBase
                multiline
                fullWidth
                placeholder="Введите ответ"
                sx={{
                    mr: 1,
                    p: 2,
                    borderRadius: "5px",
                    color: (theme) => theme.palette.text.secondary,
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
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
            <IconButton disableRipple>
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
            {/* <Button
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
            </Button> */}
        </Box>
    );
};
