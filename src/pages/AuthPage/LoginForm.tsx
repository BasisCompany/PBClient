import { DispatchWithoutAction, FC } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {
    Box,
    Button,
    Card,
    CardContent,
    Link,
    Typography,
    styled,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { PromptBuyIcon } from "../../assets/PromptBuyIcon";
import { MyTextField } from "./MyTextField";
import { PasswordTextField } from "./PasswordTextField";

export const CustomButton = styled(Button)(({ theme }) => ({
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

interface LoginFormProps {
    toggleLogin: DispatchWithoutAction;
}

const loginSchema = z.object({
    email: z
        .string()
        .nonempty("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
    password: z
        .string()
        .nonempty("Пожалуйста, укажите свой пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginForm: FC<LoginFormProps> = ({ toggleLogin }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginSchema>({
        mode: "onBlur",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        console.log(data);
        reset();
    };

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
                <Box sx={{ mb: "65px", mt: "20px" }}>
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
                                ? errors?.email?.message || ""
                                : "Ваша почта"
                        }
                    />
                    <PasswordTextField
                        register={register("password")}
                        label="Пароль"
                        error={!!errors.password}
                        helperText={
                            errors.password
                                ? errors?.password?.message || ""
                                : "Ваш пароль"
                        }
                    />

                    {/* <Box
                    sx={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    >
                        <ReCAPTCHA sitekey=" " ref={captchaRef} />
                    </Box> */}
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <CustomButton type="submit" variant="outlined">
                            Войти
                        </CustomButton>
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
                        variant="h6"
                        href="#"
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
                        marginTop: "140px",
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
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={toggleLogin}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        Зарегистрируйтесь
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};
