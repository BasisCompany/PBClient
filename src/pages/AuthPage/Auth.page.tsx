import { useReducer } from "react";
import { Box, Card } from "@mui/material";
import { AuthAbout } from "./components/AuthAbout";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

export const AuthPage = () => {
    const [showLogin, toggleLogin] = useReducer((show) => !show, true);

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "none",
            }}
        >
            <AuthAbout />
            <Box>
                {showLogin ? (
                    <LoginForm toggleLogin={toggleLogin} />
                ) : (
                    <RegisterForm toggleLogin={toggleLogin} />
                )}
            </Box>
        </Card>
    );
};
