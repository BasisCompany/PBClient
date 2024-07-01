import { FC } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    SelectProps as MuiSelectProps,
    styled,
} from "@mui/material";
import { useController } from "react-hook-form";

const CssMuiSelect = styled(MuiSelect)(({ theme }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.text.secondary}`,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.text.primary}`,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.text.primary}`,
    },
}));

const CssInputLabel = styled(InputLabel)(({ theme }) => ({
    "&.MuiInputLabel-outlined.Mui-focused": {
        color: theme.palette.text.primary,
    },
}));

type SelectProps = MuiSelectProps & {
    name: string;
    options: { value: string; label: string }[];
};

export const Select: FC<SelectProps> = ({ name, options, label, ...props }) => {
    const { field } = useController({
        defaultValue: options[0].value,
        name,
    });

    return (
        <FormControl>
            <CssInputLabel>{label}</CssInputLabel>
            <CssMuiSelect {...field} label={label} {...props}>
                {options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </CssMuiSelect>
        </FormControl>
    );
};
