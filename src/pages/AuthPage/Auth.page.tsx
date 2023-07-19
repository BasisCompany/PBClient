import { useReducer, useState } from "react";
import { Box, Card, Container } from "@mui/material";
import { AuthAbout } from "./AuthAbout";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const AuthPage = () => {
    const [showLogin, toggleLogin] = useReducer((show) => !show, true);

    return (
        <Box
            sx={{
                mt: "15px",
                mb: "15px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Card
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
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
            </Container>
        </Box>
    );
};
