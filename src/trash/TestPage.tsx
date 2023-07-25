import { PromptCard } from "../UI/PromptCard";
import { CustomButton } from "../UI/Buttons/CustomButton";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { toggleIsUserAuthenticated } from "../pages/AuthPage/store/authSlice";
import { useAuth } from "../hooks/useAuth";

export const TestPage = () => {
    const dispatch = useAppDispatch();
    const { isUserAuthenticated } = useAuth();
    const handleAuthButton = () => {
        dispatch(toggleIsUserAuthenticated());
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
            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
        </>
    );
};
