import { DispatchWithoutAction, FC } from "react";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { CustomButton } from "./LoginForm";
import { MyTextField } from "./MyTextField";
import { PasswordTextField } from "./PasswordTextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "./store/authApi";

interface RegisterFormProps {
    toggleLogin: DispatchWithoutAction;
}

const registerSchema = z
    .object({
        username: z
            .string()
            .nonempty("Пожалуйста, укажите свой никнейм.")
            .min(3, "Никнейм должен быть больше 3 символов")
            .max(20, "Никнейм должен быть меньше 20 символов"),
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
        passwordConfirm: z.string().nonempty("Пожалуйста, подтвердите пароль."),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Пароли не совпадают",
        path: ["passwordConfirm"],
    });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const RegisterForm: FC<RegisterFormProps> = ({ toggleLogin }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterSchema>({
        mode: "onBlur",
        resolver: zodResolver(registerSchema),
    });

    const [registerMut] = useRegisterMutation();

    const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { passwordConfirm, ...dataReq } = data;
        try {
            await registerMut(dataReq).unwrap();
            toggleLogin();
            reset();
        } catch (error) {
            console.log(error);
        }
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
                <form
                    onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
                >
                    <MyTextField
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
                        register={register("username")}
                        label="Никнейм"
                        error={!!errors.username}
                        helperText={
                            errors?.username
                                ? errors?.username?.message || ""
                                : "Придумайте никнейм"
                        }
                    />
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
                    <PasswordTextField
                        register={register("passwordConfirm")}
                        label="Пароль"
                        error={!!errors.passwordConfirm}
                        helperText={
                            errors.passwordConfirm
                                ? errors?.passwordConfirm?.message || ""
                                : "Подтвердите пароль"
                        }
                    />
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
                        <CustomButton type="submit" variant="outlined">
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
