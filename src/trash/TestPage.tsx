import { Box, Typography } from "@mui/material";
import { TestForm } from "./TestForm";
import { useAuth } from "@/shared/hooks/useAuth";

const TestPage = () => {
    const { isUserAuthenticated } = useAuth();

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
                </Box>
            </Box>
            <Box sx={{ width: "200px" }} />
            <TestForm />
        </Box>
    );
};

export default TestPage;
