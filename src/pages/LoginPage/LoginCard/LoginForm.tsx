import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useLoginMutation } from "@/entities/auth";
import { LoginSchema, loginSchema } from "@/shared/schema";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import {
    Form,
    ExtSubmitHandler,
    InputText,
    InputTextPassword,
} from "@/shared/ui/Forms";

export const LoginForm = () => {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const onSubmit: ExtSubmitHandler<LoginSchema> = async (data, { reset }) => {
        try {
            await login(data).unwrap();
            navigate("/");
            reset();
        } catch (error) {
            /* empty */
        }
    };

    return (
        <Form<LoginSchema> onSubmit={onSubmit} schema={loginSchema}>
            <InputText
                name="email"
                label="Почта"
                helperText="Ваша почта"
                labelIcon={<MailOutlineRoundedIcon />}
                sx={{ mb: 2 }}
            />
            <InputTextPassword
                name="password"
                label="Пароль"
                helperText="Ваш пароль"
                labelIcon={<LockOpenRoundedIcon />}
            />
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
        </Form>
    );
};
