import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { CustomLinkButton } from "../UI/Buttons/LinkButton";

export const ExpiredForm = () => {
    return (
        <Card
            sx={{
                margin: "auto",
                maxWidth: "350px",
                height: "300px",
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
                    }}
                    action={
                        <WarningAmberRoundedIcon
                            sx={{
                                color: "#FF0000",
                                fontSize: 70,
                            }}
                        />
                    }
                />
            </Box>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            marginBottom: "4px",
                            fontSize: 30,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Ссылка истекла
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            margin: 0,
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "150px",
                            WebkitLineClamp: "2",

                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Пожалуйста, зарегистрируйтесь снова, чтобы получить
                        новое письмо подтверждения.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <CustomLinkButton to="/login" variant="outlined">
                        Войти в аккаунт
                    </CustomLinkButton>
                </Box>
            </CardContent>
        </Card>
    );
};
