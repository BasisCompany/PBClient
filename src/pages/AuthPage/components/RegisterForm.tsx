import { DispatchWithoutAction, FC } from "react";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { object, string, ref, InferType } from "yup";
import { useRegisterMutation } from "../store/authApi";
import { PrimaryLoadingButton } from "../../../UI/Buttons/PrimaryButton/PrimaryLoadingButton";
import { toaster } from "../../../lib/Toast";
import {
    ExtSubmitHandler,
    Form,
    InputText,
    InputTextPassword,
} from "../../../UI/Forms";
import { FakeCaptcha } from "../../../trash/FakeCaptcha";

interface RegisterFormProps {
    toggleLogin: DispatchWithoutAction;
}

const registerSchema = object({
    username: string()
        .required("Пожалуйста, укажите свой никнейм.")
        .min(3, "Никнейм должен быть больше 3 символов")
        .max(20, "Никнейм должен быть меньше 20 символов"),
    email: string()
        .required("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
    password: string()
        .required("Пожалуйста, укажите свой пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    passwordConfirm: string()
        .required("Пожалуйста, подтвердите пароль.")
        .oneOf([ref("password")], "Пароли должны совпадать"),
});

export type RegisterSchema = InferType<typeof registerSchema>;

export const RegisterForm: FC<RegisterFormProps> = ({ toggleLogin }) => {
    const [register, { isLoading }] = useRegisterMutation();

    const onSubmit: ExtSubmitHandler<RegisterSchema> = async (data, reset) => {
        const { passwordConfirm, ...dataReq } = data;
        await register(dataReq).unwrap();
        toaster.success(
            `Письмо с подтверждением отправлено на почту: ${dataReq.email}`
        );
        toggleLogin();
        reset();
    };

    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "810px",
                borderRadius: "15px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
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
                <Form<RegisterSchema>
                    onSubmit={onSubmit}
                    schema={registerSchema}
                >
                    <InputText
                        name="username"
                        label="Никнейм"
                        labelIcon={<PersonOutlineRoundedIcon />}
                        helperText="Придумайте никнейм"
                        margin="normal"
                    />
                    <InputText
                        name="email"
                        label="Почта"
                        labelIcon={<MailOutlineRoundedIcon />}
                        helperText="Ваша почта"
                        margin="normal"
                    />
                    <InputTextPassword
                        name="password"
                        label="Пароль"
                        labelIcon={<LockOpenRoundedIcon />}
                        helperText="Ваш пароль"
                        margin="normal"
                    />
                    <InputTextPassword
                        name="passwordConfirm"
                        label="Пароль"
                        labelIcon={<LockOpenRoundedIcon />}
                        helperText="Подтвердите пароль"
                        margin="normal"
                    />
                    <FakeCaptcha />
                    {/* <SmartCaptcha sitekey="<ключ_клиента>" /> */}
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
                            Зарегистрироваться
                        </PrimaryLoadingButton>
                    </Box>
                </Form>
                <Box
                    sx={{
                        marginTop: "20px",
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
                    <Typography
                        variant="h6"
                        onClick={toggleLogin}
                        sx={{
                            fontSize: 14,
                            cursor: "pointer",
                        }}
                    >
                        Войдите
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
