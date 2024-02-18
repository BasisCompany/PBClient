import { Box, Card, CardContent, Typography } from "@mui/material";
import { DispatchWithoutAction, FC } from "react";
import { object, string, InferType } from "yup";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { PromptBuyIcon } from "../../../assets/PromptBuyIcon";
import { useLoginMutation } from "../store/authApi";
import { PrimaryLoadingButton } from "../../../UI/Buttons/PrimaryButton";
import { LinkTypography } from "../../../UI/Links/LinkTypography";
import {
    ExtSubmitHandler,
    Form,
    InputText,
    InputTextPassword,
} from "../../../UI/Forms";
import { FakeCaptcha } from "../../../trash/FakeCaptcha";

interface LoginFormProps {
    toggleLogin: DispatchWithoutAction;
}

const loginSchema = object({
    email: string()
        .required("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
    password: string()
        .required("Пожалуйста, укажите свой пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
});

export type LoginSchema = InferType<typeof loginSchema>;

export const LoginForm: FC<LoginFormProps> = ({ toggleLogin }) => {
    const [login, { isLoading }] = useLoginMutation();

    const onSubmit: ExtSubmitHandler<LoginSchema> = async (data, reset) => {
        await login(data).unwrap().then(reset);
    };

    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "810px",
                borderRadius: "15px",
                backgroundImage: "none",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        height: "135px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <PromptBuyIcon
                        sx={{
                            width: "7em",
                            height: "7em",
                        }}
                    />
                </Box>
            </Box>
            <CardContent>
                <Box sx={{ mb: "50px", mt: "20px" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            component="span"
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontSize: 30,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            Вход
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
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
                            }}
                        >
                            Пожалуйста, войдите, чтобы продолжить.
                        </Typography>
                    </Box>
                </Box>
                <Form<LoginSchema> onSubmit={onSubmit} schema={loginSchema}>
                    <InputText
                        name="email"
                        label="Почта"
                        helperText="Ваша почта"
                        labelIcon={<MailOutlineRoundedIcon />}
                        sx={{ mb: 2 }}
                    />
                    <InputTextPassword
                        name="password"
                        label="Пароль"
                        helperText="Ваш пароль"
                        labelIcon={<LockOpenRoundedIcon />}
                    />
                    <Box
                        sx={{
                            marginTop: "15px",
                            width: "100%",
                            minWidth: "100px",
                        }}
                    >
                        <FakeCaptcha />
                        {/* <SmartCaptcha sitekey="<ключ_клиента>" /> */}
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <PrimaryLoadingButton
                            type="submit"
                            variant="outlined"
                            isLoading={isLoading}
                        >
                            Войти
                        </PrimaryLoadingButton>
                    </Box>
                </Form>
                <Box
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <LinkTypography
                        to="/forgot-password"
                        variant="h6"
                        fontSize={14}
                    >
                        Забыли пароль?
                    </LinkTypography>
                </Box>
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        color="text.secondary"
                        sx={{
                            display: { xs: "none", md: "-webkit-box" },
                            marginRight: "5px",
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
                        Нет аккаунта?
                    </Typography>
                    <Typography
                        variant="h6"
                        onClick={toggleLogin}
                        sx={{
                            fontSize: 14,
                            cursor: "pointer",
                        }}
                    >
                        Зарегистрируйтесь
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
