import { Box, ButtonBase, Typography, styled } from "@mui/material";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { YandexIcon } from "@/assets/YandexIcon";
import { URL_ROOT } from "@/shared/api/config";

const SocialButton = styled(ButtonBase)(({ theme }) => ({
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

export const SocialLogin = () => {
    const handleGoogleLogin = () => {
        location.href = `${URL_ROOT}/auth/google`;
    };

    const handleYandexLogin = () => {
        location.href = `${URL_ROOT}/auth/yandex`;
    };
    return (
        <>
            <SocialButton sx={{ mb: 2 }} onClick={handleGoogleLogin}>
                <GoogleIcon />
                <Box sx={{ width: "83%" }}>
                    <Typography variant="text">Войти через Google</Typography>
                </Box>
            </SocialButton>
            <SocialButton sx={{ mb: 3 }}>
                <YandexIcon />
                <Box sx={{ width: "83%" }} onClick={handleYandexLogin}>
                    <Typography variant="text">Войти через Yandex</Typography>
                </Box>
            </SocialButton>
        </>
    );
};
