import { useParams } from "react-router";
import { alpha, Box, Typography } from "@mui/material";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { CenterBox } from "@/shared/ui/CenterBox";
import { useResetPasswordMutation } from "@/entities/auth";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import { Form, ExtSubmitHandler, InputTextPassword } from "@/shared/ui/Forms";
import { ResetPasswordSchema, resetPasswordSchema } from "@/shared/schema";
import { toaster } from "@/app/providers/Toast";
import { pbColors } from "@/app/providers/Theme";

export const ResetPasswordPage = () => {
    const { resetToken } = useParams();

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const onSubmit: ExtSubmitHandler<ResetPasswordSchema> = async (
        data,
        { reset }
    ) => {
        await resetPassword({
            resetPasswordToken: resetToken ?? "",
            password: data.password,
        }).unwrap();
        reset();
        toaster.success(`Пароль успешно обновлен`);
    };

    return (
        <CenterBox>
            <Box
                sx={{
                    width: "350px",
                    height: "500px",
                    borderRadius: "15px",
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
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
                            paddingTop: "5px",
                            marginTop: "7px",
                        }}
                    >
                        <LockResetRoundedIcon
                            sx={{
                                color: alpha(pbColors.green, 1),
                                fontSize: 70,
                            }}
                        />
                    </Box>
                </Box>
                <Box p={2}>
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
                    <Form<ResetPasswordSchema>
                        onSubmit={onSubmit}
                        schema={resetPasswordSchema}
                    >
                        <InputTextPassword
                            sx={{ mt: 3 }}
                            name="password"
                            label="Пароль"
                            helperText="Укажите новый пароль"
                            labelIcon={<LockOpenRoundedIcon />}
                        />
                        <InputTextPassword
                            sx={{ mt: 3 }}
                            name="passwordConfirm"
                            label="Подтвердите пароль"
                            helperText="Подтвердите новый пароль"
                            labelIcon={<LockOpenRoundedIcon />}
                        />
                        <Box
                            sx={{
                                marginTop: "30px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <PrimaryLoadingButton
                                type="submit"
                                variant="outlined"
                                isLoading={isLoading}
                            >
                                Изменить пароль
                            </PrimaryLoadingButton>
                        </Box>
                    </Form>
                </Box>
            </Box>
        </CenterBox>
    );
};
