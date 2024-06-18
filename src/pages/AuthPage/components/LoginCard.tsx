import { DispatchWithoutAction, FC } from "react";
import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router";
import { useLoginMutation } from "@/entities/auth";
import { PromptBuyIcon } from "@/assets/PromptBuyIcon";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import {
    Form,
    ExtSubmitHandler,
    InputText,
    InputTextPassword,
} from "@/shared/ui/Forms";
import { LinkTypography } from "@/shared/ui/Links/LinkTypography";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { YandexIcon } from "@/assets/YandexIcon";
import { LoginSchema, loginSchema } from "@/shared/schema";
import { URL_ROOT } from "@/shared/api/config";

interface LoginCardProps {
    toggleLogin: DispatchWithoutAction;
}

export const SocialButton = styled(ButtonBase)(({ theme }) => ({
    fontSize: 15,
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.bgcolor.tertiary.main,
    "&:hover": {
        backgroundColor: theme.palette.bgcolor.tertiary.main,
    },
}));

export const LoginCard: FC<LoginCardProps> = ({ toggleLogin }) => {
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const onSubmit: ExtSubmitHandler<LoginSchema> = async (data, { reset }) => {
        try {
            await login(data).unwrap();
            navigate("/");
            reset();
        } catch (error) {
            /* empty */
        }
    };

    const handleGoogleLogin = () => {
        location.href = `${URL_ROOT}/auth/google`;
    };

    const handleYandexLogin = () => {
        location.href = `${URL_ROOT}/auth/yandex`;
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
                        height: "125px",
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
                <Box sx={{ mb: 5 }}>
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
                <Box
                    sx={{
                        mb: 3,
                        width: "100%",
                        minWidth: "100px",
                    }}
                >
                    <SocialButton sx={{ mb: 2 }} onClick={handleGoogleLogin}>
                        <GoogleIcon />
                        <Box sx={{ width: "83%" }}>
                            <Typography variant="text">
                                Войти через Google
                            </Typography>
                        </Box>
                    </SocialButton>
                    <SocialButton sx={{ mb: 3 }}>
                        <YandexIcon />
                        <Box sx={{ width: "83%" }} onClick={handleYandexLogin}>
                            <Typography variant="text">
                                Войти через Yandex
                            </Typography>
                        </Box>
                    </SocialButton>
                    <Divider>
                        <Typography
                            variant="text"
                            sx={{
                                color: (theme) => theme.palette.text.secondary,
                            }}
                        >
                            ИЛИ
                        </Typography>
                    </Divider>
                    {/* <FakeCaptcha /> */}
                    {/* <SmartCaptcha sitekey="<ключ_клиента>" /> */}
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
