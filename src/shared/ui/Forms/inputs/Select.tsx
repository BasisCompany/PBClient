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

//TODO: Custom Select
const CssMuiSelect = styled(MuiSelect)(({ theme }) => ({
    "& label.Mui-focused": {
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
            <InputLabel>{label}</InputLabel>
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
