import { useReducer } from "react";
import { Box, Card } from "@mui/material";
import { AuthAbout } from "./components/AuthAbout";
import { LoginCard } from "./components/LoginCard";
import { RegisterCard } from "./components/RegisterCard";

const AuthPage = () => {
    const [showLogin, toggleLogin] = useReducer((show) => !show, true);

    return (
        <Card
            sx={{
                maxHeight: "820px",
                display: "flex",
                justifyContent: "center",
                backgroundImage: "none",
                boxShadow: "none",
            }}
        >
            <AuthAbout />
            <Box>
                {showLogin ? (
                    <LoginCard toggleLogin={toggleLogin} />
                ) : (
                    <RegisterCard toggleLogin={toggleLogin} />
                )}
            </Box>
        </Card>
    );
};

export default AuthPage;
