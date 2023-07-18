import {
    Card,
    Box,
    CardContent,
    Typography,
    Button,
    styled,
    TextField,
    CardHeader,
} from "@mui/material";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const CssTextField = styled(TextField)(({ theme }) => ({
    "& label.Mui-focused": {
        color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.text.secondary,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.text.primary,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.text.primary,
        },
    },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const RecoverPasswordForm = () => {
    return (
        <Card
            sx={{
                maxWidth: "400px",
                height: "410px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                        marginTop: "7px",
                    }}
                    action={
                        <ForwardToInboxOutlinedIcon
                            sx={{
                                color: "#00FF00",
                                fontSize: 70,
                            }}
                        />
                    }
                />
            </Box>

            <CardContent sx={{}}>
                <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        textAlign: { xs: "center", sm: "left" },
                        marginBottom: "4px",
                        fontSize: 30,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Восстановление пароля
                </Typography>
                <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{
                        display: { xs: "block", sm: "none" },
                        textAlign: { xs: "center", sm: "left" },
                        marginBottom: "4px",
                        fontSize: 30,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Восстановление
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{
                        margin: 0,
                        fontSize: 14,
                        textAlign: { xs: "center", sm: "left" },
                        visibility: "visible",
                        maxHeight: "150px",
                        WebkitLineClamp: "2",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Пожалуйста, введите почту, чтобы восстановить пароль.
                </Typography>
                <Box sx={{}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CssTextField
                            fullWidth
                            helperText={
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Ваша почта
                                </Typography>
                            }
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <MailOutlineRoundedIcon
                                        sx={{
                                            fontSize: 20,
                                            color: "action.active",
                                            marginRight: "5px",
                                            marginBottom: "3px",
                                        }}
                                    />
                                    Email
                                </Box>
                            }
                            id="custom-css-outlined-input"
                            margin="normal"
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ColorButton variant="outlined">
                        Отправить письмо
                    </ColorButton>
                </Box>
            </CardContent>
        </Card>
    );
};
