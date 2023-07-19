import { useState, MouseEvent, FC } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
    InputAdornment,
    IconButton,
    Typography,
    Box,
    TextFieldProps,
} from "@mui/material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { CustomTextField } from "./MyTextField";

type PasswordTextFieldProps = TextFieldProps & {
    confirm?: boolean;
};

export const PasswordTextField: FC<PasswordTextFieldProps> = ({
    confirm,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomTextField
                fullWidth
                margin="normal"
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LockOpenRoundedIcon
                            sx={{
                                fontSize: 20,
                                color: "action.active",
                                marginRight: "4px",
                                marginBottom: "4px",
                            }}
                        />
                        {confirm ? "Подтверждение" : "Пароль"}
                    </Box>
                }
                helperText={
                    <Typography
                        component="span"
                        sx={{
                            marginLeft: "-14px",
                            fontSize: "15px",
                        }}
                    >
                        {confirm ? "Повтор пароля" : "Ваш пароль"}
                    </Typography>
                }
                {...props}
            />
        </Box>
    );
};
