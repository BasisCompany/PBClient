import { FC } from "react";
import { Box, TextField, Typography, styled } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
    "& label.Mui-focused": {
        color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.text.secondary,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.text.primary,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.text.primary,
        },
    },
}));

interface MyTextFieldProps {
    label: string;
    helperText: string;
    icon: any;
}

export const MyTextField: FC<MyTextFieldProps> = ({
    label,
    helperText,
    icon,
    ...props
}) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomTextField
                fullWidth
                margin="normal"
                helperText={
                    <Typography
                        component="span"
                        sx={{
                            marginLeft: "-14px",
                            fontSize: "15px",
                        }}
                    >
                        {helperText}
                    </Typography>
                }
                label={
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {icon}
                        {label}
                    </Box>
                }
                {...props}
            />
        </Box>
    );
};
