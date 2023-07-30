import { PromptCard } from "../UI/PromptCard";
import { CustomButton } from "../UI/Buttons/CustomButton";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { toggleIsUserAuthenticated } from "../pages/AuthPage/store/authSlice";
import { useAuth } from "../hooks/useAuth";
import { useLazyMeQuery } from "../pages/AuthPage/store/authApi";

export const TestPage = () => {
    const dispatch = useAppDispatch();
    const { isUserAuthenticated } = useAuth();

    const handleAuthButton = () => {
        dispatch(toggleIsUserAuthenticated());
    };

    const [getMe] = useLazyMeQuery();

    const handleTestQueryButton = async () => {
        try {
            const result = await getMe().unwrap();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box sx={{ width: "200px", m: 5, textAlign: "center" }}>
                {isUserAuthenticated ? (
                    <Typography color="green">Авторизация выполнена</Typography>
                ) : (
                    <Typography color="red">Не авторизирован</Typography>
                )}

                <CustomButton onClick={handleAuthButton}>
                    Авторизация
                </CustomButton>
            </Box>
            <Box sx={{ width: "200px", m: 5, textAlign: "center" }}>
                <CustomButton onClick={handleTestQueryButton}>
                    Тестовый запрос на сервер
                </CustomButton>
            </Box>
            <PromptCard />
        </>
    );
};
