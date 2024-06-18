import { DispatchWithoutAction, FC } from "react";
import { Box, Card, CardContent } from "@mui/material";
import { SocialSection } from "../components/SocialSection";
import { LoginTitle } from "./LoginTitle";
import { RegisterButton } from "./RegisterButton";
import { ForgotPasswordButton } from "./ForgotPasswordButton";
import { LoginLogo } from "./LoginLogo";
import { LoginForm } from "./LoginForm";

interface LoginCardProps {
    toggleLogin: DispatchWithoutAction;
}

//TODO[Артем]: Replace Card with Box
export const LoginCard: FC<LoginCardProps> = ({ toggleLogin }) => {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "810px",
                borderRadius: "15px",
                backgroundImage: "none",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
            }}
        >
            <LoginLogo />
            <CardContent>
                <LoginTitle />
                <Box mb={3}>
                    <SocialSection />
                </Box>
                <LoginForm />
                <ForgotPasswordButton />
                <RegisterButton toggleLogin={toggleLogin} />
            </CardContent>
        </Card>
    );
};
