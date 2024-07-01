import { DispatchWithoutAction, FC } from "react";
import { Box } from "@mui/material";
import { SocialSection } from "../components/SocialSection";
import { RegisterForm } from "./RegisterForm";
import { LoginButton } from "./LoginButton";
import { RegisterTitle } from "./RegisterTitle";
import { RegisterHeader } from "./RegisterHeader";

interface RegisterCardProps {
    toggleLogin: DispatchWithoutAction;
}

//TODO: Handle error
export const RegisterCard: FC<RegisterCardProps> = ({ toggleLogin }) => {
    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "810px",
                borderRadius: "15px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
            }}
        >
            <RegisterHeader toggleLogin={toggleLogin} />
            <Box p={2}>
                <RegisterTitle />
                <SocialSection />
                <RegisterForm toggleLogin={toggleLogin} />
                <LoginButton toggleLogin={toggleLogin} />
            </Box>
        </Box>
    );
};
