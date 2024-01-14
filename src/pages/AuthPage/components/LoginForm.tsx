import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { DispatchWithoutAction, FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSnackbar } from "../../../UI/Snackbar/useSnackbar";
import { PromptBuyIcon } from "../../../assets/PromptBuyIcon";
import { MyTextField } from "./MyTextField";
import { PasswordTextField } from "./PasswordTextField";
import { useLoginMutation } from "../store/authApi";
import { ApiError, getErrorMessage } from "../../../modules/Error/apiError";
import { SmartCaptcha } from "@yandex/smart-captcha";
import { LinkBehavior } from "../../../UI/Route/LinkBehavior";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryLoadingButton } from "../../../UI/Buttons/PrimaryButton";

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
    const [showAlert] = useSnackbar();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginSchema>({
        mode: "onBlur",
        resolver: yupResolver(loginSchema),
    });

    const [login, { isLoading }] = useLoginMutation();

    const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
        try {
            await login(data).unwrap();
            reset();
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.error(error);
        }
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
                <form
                    onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
                >
                    <MyTextField
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
                        register={register("email")}
                        label="Email"
                        error={!!errors.email}
                        helperText={
                            errors.email
                                ? errors?.email?.message ?? ""
                                : "Ваша почта"
                        }
                    />
                    <PasswordTextField
                        register={register("password")}
                        label="Пароль"
                        error={!!errors.password}
                        helperText={
                            errors.password
                                ? errors?.password?.message ?? ""
                                : "Ваш пароль"
                        }
                    />
                    <Box
                        sx={{
                            marginTop: "15px",
                            width: "100%",
                            minWidth: "100px",
                        }}
                    >
                        <SmartCaptcha sitekey="<ключ_клиента>" />
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
                </form>
                <Box
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Link
                        component={LinkBehavior}
                        to="/forgot-password"
                        variant="h6"
                        underline="none"
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        Забыли пароль?
                    </Link>
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
                    <Link
                        component="span"
                        variant="h6"
                        underline="none"
                        onClick={toggleLogin}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                            cursor: "pointer",
                        }}
                    >
                        Зарегистрируйтесь
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};
