import { zodResolver } from "@hookform/resolvers/zod";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingButton } from "../../UI/Buttons/LoadingButton";
import { CenterBox } from "../../UI/CenterBox";
import { useSnackbar } from "../../UI/Snackbar/useSnackbar";
import { MyTextField } from "./components/MyTextField";
import { useLazyForgotPasswordQuery } from "./store/authApi";

const forgotPasswordSchema = z.object({
    email: z
        .string()
        .nonempty("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordPage = () => {
    const [showAlert] = useSnackbar();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ForgotPasswordSchema>({
        mode: "onBlur",
        resolver: zodResolver(forgotPasswordSchema),
    });

    const [forgotPassword, { isLoading }] = useLazyForgotPasswordQuery();

    const onSubmit: SubmitHandler<ForgotPasswordSchema> = async (data) => {
        try {
            await forgotPassword(data.email).unwrap();
            reset();
            //TODO: Карточка с значком успешно
        } catch (error) {
            showAlert("error", "Произошла ошибка! Повторите попытку позже");
            console.log(error);
        }
    };

    return (
        <CenterBox>
            <Card
                sx={{
                    maxWidth: "400px",
                    minHeight: "390px",
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
                    <Box
                        sx={{
                            height: "40px",
                            paddingLeft: "5px",
                            marginTop: "7px",
                        }}
                    >
                        <ForwardToInboxOutlinedIcon
                            sx={{
                                color: "#00FF00",
                                fontSize: 70,
                            }}
                        />
                    </Box>
                </Box>
                <CardContent>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            marginBottom: "4px",
                            fontSize: { xs: "28px", sm: "30px" },
                            lineHeight: 1,
                            textOverflow: "ellipsis",
                            cursor: "default",
                        }}
                    >
                        Восстановление пароля
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
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Пожалуйста, введите почту, чтобы восстановить пароль.
                    </Typography>
                    <form
                        onSubmit={(...args) =>
                            void handleSubmit(onSubmit)(...args)
                        }
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
                        <Box
                            sx={{
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <LoadingButton
                                isLoading={isLoading}
                                variant="outlined"
                                type="submit"
                            >
                                Отправить письмо
                            </LoadingButton>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </CenterBox>
    );
};
