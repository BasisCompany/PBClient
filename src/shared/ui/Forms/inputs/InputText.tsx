import { FC, ReactNode } from "react";
import {
    TextFieldProps,
    TextField,
    Typography,
    styled,
    InputAdornment,
    Box,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

//TODO[Артем]: Исправить синий фон при автоподстановке полей ввода
const CssTextField = styled(TextField)(({ theme }) => ({
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
    "& .MuiOutlinedInput-input:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.bgcolor.tertiary.main} inset`,
        WebkitTextFillColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-input:-autofill": {
        BoxShadow: `0 0 0 100px ${theme.palette.bgcolor.tertiary.main} inset`,
        TextFillColor: theme.palette.text.primary,
    },
}));

export type InputTextProps = Omit<TextFieldProps, "helperText"> & {
    name: string;
    label: string;
    helperText?: string;
    labelIcon?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};

export const InputText: FC<InputTextProps> = ({
    name,
    label,
    helperText,
    labelIcon,
    startIcon,
    endIcon,
    InputProps,
    ...props
}) => {
    const { control } = useFormContext();
    const {
        field,
        fieldState: { error },
    } = useController({
        defaultValue: "",
        name,
        control,
    });

    const startAdornment = startIcon && (
        <InputAdornment position="start">{startIcon}</InputAdornment>
    );

    const endAdornment = endIcon && (
        <InputAdornment position="end">{endIcon}</InputAdornment>
    );

    const labelBox = labelIcon ? (
        <Box display="flex" alignItems="center">
            {labelIcon}
            <Box marginLeft={0.5}>{label}</Box>
        </Box>
    ) : (
        label
    );
    return (
        <CssTextField
            {...field}
            label={labelBox}
            variant="outlined"
            fullWidth
            error={!!error}
            helperText={
                <Typography
                    component="span"
                    sx={{
                        marginLeft: "-14px",
                        fontSize: "14px",
                    }}
                >
                    {error ? error?.message : helperText}
                </Typography>
            }
            InputProps={{
                startAdornment,
                endAdornment,
                ...InputProps,
            }}
            {...props}
        />
    );
};
