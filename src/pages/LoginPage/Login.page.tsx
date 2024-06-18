import { useReducer } from "react";
import { Box } from "@mui/material";
import { AuthAbout } from "./AuthAbout";
import { LoginCard } from "./LoginCard/LoginCard";
import { RegisterCard } from "./RegisterCard/RegisterCard";
import { FlexBox } from "@/shared/ui/FlexBox";

export const LoginPage = () => {
    const [showLogin, toggleLogin] = useReducer((show) => !show, true);

    return (
        <FlexBox justifyContent="center" maxHeight="820px">
            <AuthAbout />
            <Box>
                {showLogin ? (
                    <LoginCard toggleLogin={toggleLogin} />
                ) : (
                    <RegisterCard toggleLogin={toggleLogin} />
                )}
            </Box>
        </FlexBox>
    );
};
