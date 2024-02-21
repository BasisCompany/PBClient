import { Box, Typography } from "@mui/material";
import { PromptCard } from "../shared/ui/PromptCard";
import { toggleIsUserAuthenticated } from "../pages/AuthPage/store/authSlice";
import { useAuth } from "../shared/hooks/useAuth";
import { useLazyMeQuery } from "../pages/AuthPage/store/authApi";
import { PrimaryButton } from "../shared/ui/Buttons/PrimaryButton/PrimaryButton";
import { useAppDispatch } from "../app/appStore";
import { TestForm } from "./TestForm";

const TestPage = () => {
    const dispatch = useAppDispatch();
    const { isUserAuthenticated } = useAuth();

    const handleAuthButton = () => {
        dispatch(toggleIsUserAuthenticated());
    };

    const [getMe] = useLazyMeQuery();

    const handleTestQueryButton = async () => {
        try {
            await getMe().unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Box>
                <Box sx={{ width: "200px", m: 5, textAlign: "center" }}>
                    {isUserAuthenticated ? (
                        <Typography color="green">
                            Авторизация выполнена
                        </Typography>
                    ) : (
                        <Typography color="red">Не авторизирован</Typography>
                    )}

                    <PrimaryButton onClick={handleAuthButton}>
                        Авторизация
                    </PrimaryButton>
                </Box>
                <Box sx={{ width: "200px", m: 5, textAlign: "center" }}>
                    <PrimaryButton onClick={() => void handleTestQueryButton()}>
                        Тестовый запрос на сервер
                    </PrimaryButton>
                </Box>
            </Box>
            <PromptCard />
            <Box sx={{ width: "200px" }} />
            <TestForm />
            {/* <ColorTest /> */}
        </Box>
    );
};

export default TestPage;
