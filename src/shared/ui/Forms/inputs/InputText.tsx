import { FC, ReactNode, memo, useState } from "react";
import {
    TextFieldProps,
    TextField,
    Typography,
    styled,
    InputAdornment,
    Box,
} from "@mui/material";
import { useController } from "react-hook-form";
import { FlexBox } from "../../FlexBox";

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
    label?: string;
    counter?: boolean;
    helperText?: string;
    labelIcon?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};

export const InputText: FC<InputTextProps> = memo((props) => {
    const {
        name,
        label,
        counter = false,
        helperText,
        labelIcon,
        startIcon,
        endIcon,
        InputProps,
        onFocus,
        onBlur,
        ...otherProps
    } = props;

    if (counter && !props.inputProps?.maxLength) {
        throw new Error("counter needs maxLength to be set ");
    }

    const [visible, setVisible] = useState(false);

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        defaultValue: "",
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

    const inputCounter = visible && counter && (
        <Typography fontSize={14} component="span">
            {`${(field.value as string).length} / ${props.inputProps?.maxLength}`}
        </Typography>
    );

    return (
        <CssTextField
            {...field}
            label={labelBox}
            variant="outlined"
            fullWidth
            error={!!error}
            helperText={
                helperText !== "none" ? (
                    <FlexBox
                        component="span"
                        justifyContent="space-between"
                        height="12px"
                    >
                        <Typography
                            component="span"
                            sx={{
                                marginLeft: "-14px",
                                fontSize: "12px",
                            }}
                        >
                            {error ? error?.message : helperText}
                        </Typography>
                        {inputCounter}
                    </FlexBox>
                ) : (
                    <FlexBox
                        component="span"
                        justifyContent="flex-end"
                        mt="-26px"
                    >
                        {inputCounter}
                    </FlexBox>
                )
            }
            InputProps={{
                startAdornment,
                endAdornment,
                ...InputProps,
            }}
            onFocus={(event) => {
                setVisible(true);
                onFocus && onFocus(event);
            }}
            onBlur={(event) => {
                setVisible(false);
                onBlur && onBlur(event);
            }}
            {...otherProps}
        />
    );
});
