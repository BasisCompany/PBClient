import { Box } from "@mui/material";
import { DispatchWithoutAction, FC } from "react";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useRegisterMutation } from "@/entities/auth";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import {
    Form,
    ExtSubmitHandler,
    InputTextPassword,
    InputUsername,
    InputEmail,
} from "@/shared/ui/Forms";
import { RegisterSchema, registerSchema } from "@/shared/schema";
import { toaster } from "@/app/providers/Toast";

interface RegisterFormProps {
    toggleLogin: DispatchWithoutAction;
}

export const RegisterForm: FC<RegisterFormProps> = ({ toggleLogin }) => {
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
    return (
        <Form<RegisterSchema> onSubmit={onSubmit} schema={registerSchema}>
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
    );
};
