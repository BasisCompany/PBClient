import { zodResolver } from "@hookform/resolvers/zod";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { z } from "zod";
import { LoadingButton } from "../../UI/Buttons/LoadingButton";
import { CenterBox } from "../../UI/CenterBox";
import { useSnackbar } from "../../UI/Snackbar/useSnackbar";
import { PasswordTextField } from "./components/PasswordTextField";
import { useResetPasswordMutation } from "./store/authApi";

const resetPasswordSchema = z
    .object({
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

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const ResetPasswordPage = () => {
    const [showAlert] = useSnackbar();
    const { resetToken } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ResetPasswordSchema>({
        mode: "onBlur",
        resolver: zodResolver(resetPasswordSchema),
    });

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const onSubmit: SubmitHandler<ResetPasswordSchema> = async (data) => {
        try {
            await resetPassword({
                resetPasswordToken: resetToken || "",
                password: data.password,
            }).unwrap();
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
                    width: "350px",
                    height: "500px",
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
                            marginTop: "7px",
                        }}
                        action={
                            <LockResetRoundedIcon
                                sx={{
                                    color: "#00FF00",
                                    fontSize: 70,
                                }}
                            />
                        }
                    />
                </Box>
                <CardContent>
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
                        Смена пароля
                    </Typography>
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
                        Пожалуйста, заполните поля ниже.
                    </Typography>

                    <form
                        onSubmit={(...args) =>
                            void handleSubmit(onSubmit)(...args)
                        }
                    >
                        <PasswordTextField
                            register={register("password")}
                            label="Пароль"
                            error={!!errors.password}
                            helperText={
                                errors.password
                                    ? errors?.password?.message || ""
                                    : "Укажите новый пароль"
                            }
                        />
                        <PasswordTextField
                            register={register("passwordConfirm")}
                            label="Подтвердите пароль"
                            error={!!errors.passwordConfirm}
                            helperText={
                                errors.passwordConfirm
                                    ? errors?.passwordConfirm?.message || ""
                                    : "Подтвердите новый пароль"
                            }
                        />
                        <Box
                            sx={{
                                marginTop: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <LoadingButton
                                type="submit"
                                variant="outlined"
                                isLoading={isLoading}
                            >
                                Изменить пароль
                            </LoadingButton>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </CenterBox>
    );
};
