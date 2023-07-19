import { Dispatch, DispatchWithoutAction, FC, SetStateAction } from "react";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { CustomButton } from "./LoginForm";
import { MyTextField } from "./MyTextField";
import { PasswordTextField } from "./PasswordTextField";

interface RegisterFormProps {
    toggleLogin: DispatchWithoutAction;
}

export const RegisterForm: FC<RegisterFormProps> = ({ toggleLogin }) => {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "830px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    height: "40px",
                    justifyContent: "flex-start",
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                    }}
                    action={
                        <IconButton aria-label="back" onClick={toggleLogin}>
                            <KeyboardBackspaceRoundedIcon
                                sx={{
                                    fontSize: 25,
                                }}
                            />
                        </IconButton>
                    }
                />
            </Box>
            <CardContent>
                <Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component={"span"}
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
                            Создайте аккаунт
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component={"span"}
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
                            Регистрация
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            color="text.secondary"
                            sx={{
                                margin: 0,
                                fontSize: 14,
                                visibility: "visible",
                                maxHeight: "150px",
                                WebkitLineClamp: "2",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                                width: "100%",
                            }}
                        >
                            Для регистрации заполните поля ниже.
                        </Typography>
                    </Box>
                </Box>
                <form>
                    <MyTextField
                        label="Никнейм"
                        helperText="Ваше имя"
                        icon={
                            <PersonOutlineRoundedIcon
                                sx={{
                                    fontSize: 23,
                                    color: "action.active",
                                    marginRight: "2px",
                                    marginBottom: "4px",
                                }}
                            />
                        }
                    />
                    <MyTextField
                        label="Email"
                        helperText="Ваша почта"
                        icon={
                            <MailOutlineRoundedIcon
                                sx={{
                                    fontSize: 20,
                                    color: "action.active",
                                    marginRight: "5px",
                                    marginBottom: "3px",
                                }}
                            />
                        }
                    />
                    <PasswordTextField />
                    <PasswordTextField confirm />

                    <Box
                        sx={{
                            border: "1px solid #fff",
                            height: "80px",
                            marginTop: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {/* <ReCAPTCHA sitekey=" " ref={captchaRef} /> */}
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <CustomButton variant="outlined">
                            Зарегистрироваться
                        </CustomButton>
                    </Box>
                </form>
                <Box
                    sx={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        color="text.secondary"
                        sx={{
                            marginRight: "5px",
                            fontSize: 14,
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
                        Уже есть аккаунт?
                    </Typography>
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={toggleLogin}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        Войдите
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};
