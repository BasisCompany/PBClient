import { DispatchWithoutAction, FC } from "react";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    styled,
} from "@mui/material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import { toaster } from "@/app/providers/Toast";
import { useRegisterMutation } from "@/entities/auth";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import {
    Form,
    ExtSubmitHandler,
    InputTextPassword,
    InputUsername,
    InputEmail,
} from "@/shared/ui/Forms";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { YandexIcon } from "@/assets/YandexIcon";
import { RegisterSchema, registerSchema } from "@/shared/schema";
import { URL_ROOT } from "@/shared/api/config";

interface RegisterCardProps {
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
//TODO: Handle error & add nickname check
export const RegisterCard: FC<RegisterCardProps> = ({ toggleLogin }) => {
    const [register, { isLoading }] = useRegisterMutation();

    const onSubmit: ExtSubmitHandler<RegisterSchema> = async (
        data,
        { reset }
    ) => {
        const { passwordConfirm, ...dataReq } = data;
        await register(dataReq).unwrap();
        toaster.success(
            `Письмо с подтверждением отправлено на почту: ${dataReq.email}`
        );
        toggleLogin();
        reset();
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
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    height: "30px",
                    justifyContent: "flex-start",
                }}
            >
                <CardHeader
                    sx={{
                        height: "220px",
                        pt: 1,
                        paddingLeft: 1,
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
                            mb: 1,
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
                </Box>
                <Box
                    sx={{
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
                </Box>
                <Form<RegisterSchema>
                    onSubmit={onSubmit}
                    schema={registerSchema}
                >
                    <InputUsername
                        label="Никнейм"
                        helperText="Придумайте никнейм"
                        counter
                        labelIcon={<PersonOutlineRoundedIcon />}
                        inputProps={{ maxLength: 20 }}
                        margin="normal"
                    />
                    <InputEmail
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

                    {/* <FakeCaptcha /> */}
                    {/* <SmartCaptcha sitekey="<ключ_клиента>" /> */}
                    <Box
                        sx={{
                            marginTop: 2,
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
