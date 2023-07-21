import { FC } from "react";
import {
    Box,
    TextField,
    TextFieldProps,
    Typography,
    styled,
} from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
//TODO[Артем]: Исправить синий фон при автоподстановке полей ввода
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

type MyTextFieldProps = TextFieldProps & {
    label: string;
    helperText: string;
    icon: any;
    register: UseFormRegisterReturn;
};

export const MyTextField: FC<MyTextFieldProps> = ({
    label,
    helperText,
    icon,
    register,
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
                {...register}
                {...props}
            />
        </Box>
    );
};
