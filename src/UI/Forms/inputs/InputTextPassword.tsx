import { FC, useReducer } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { InputText, InputTextProps } from "./InputText";

export const InputTextPassword: FC<InputTextProps> = (props) => {
    const [showPassword, togglePassword] = useReducer((state) => !state, false);
    return (
        <InputText
            type={showPassword ? "text" : "password"}
            endIcon={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }
            {...props}
        />
    );
};
