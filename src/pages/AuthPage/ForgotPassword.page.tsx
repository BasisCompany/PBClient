import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { object, string, InferType } from "yup";
import { CenterBox } from "../../shared/ui/CenterBox";
import { PrimaryLoadingButton } from "../../shared/ui/Buttons/PrimaryButton/PrimaryLoadingButton";
import { ExtSubmitHandler, Form, InputText } from "../../shared/ui/Forms";
import { FakeCaptcha } from "../../trash/FakeCaptcha";
import { useLazyForgotPasswordQuery } from "./store/authApi";

const forgotPasswordSchema = object({
    email: string()
        .required("Пожалуйста, укажите свою почту.")
        .email("Пожалуйста, укажите верную почту")
        .min(3, "Почта должна содержать больше 3 символов"),
});

export type ForgotPasswordSchema = InferType<typeof forgotPasswordSchema>;

export const ForgotPasswordPage = () => {
    const [forgotPassword, { isLoading }] = useLazyForgotPasswordQuery();

    const onSubmit: ExtSubmitHandler<ForgotPasswordSchema> = async (
        data,
        reset
    ) => {
        await forgotPassword(data.email).unwrap();
        reset();
        //TODO: Карточка с значком успешно
    };

    return (
        <CenterBox>
            <Card
                sx={{
                    maxWidth: "400px",
                    minHeight: "390px",
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
                    <Form<ForgotPasswordSchema>
                        onSubmit={onSubmit}
                        schema={forgotPasswordSchema}
                    >
                        <InputText
                            name="email"
                            label="Почта"
                            helperText="Ваша почта"
                            labelIcon={<MailOutlineRoundedIcon />}
                            margin="normal"
                        />
                        <Box marginTop="10px">
                            <FakeCaptcha />
                            {/* <SmartCaptcha sitekey="<ключ_клиента>" /> */}
                        </Box>
                        <Box
                            sx={{
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <PrimaryLoadingButton
                                isLoading={isLoading}
                                variant="outlined"
                                type="submit"
                            >
                                Отправить письмо
                            </PrimaryLoadingButton>
                        </Box>
                    </Form>
                </CardContent>
            </Card>
        </CenterBox>
    );
};
