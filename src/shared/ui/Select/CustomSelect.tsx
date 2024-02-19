import { styled, SelectProps, Select } from "@mui/material";

export const CustomSelect = styled((props: SelectProps) => (
    <Select {...props} />
))(({ theme }) => ({
    "& .MuiSelect-select": {
        padding: "0px",
        color: theme.palette.text.primary,
        borderRadius: "4px",
        backgroundColor: theme.palette.primary.main,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(15),
        display: "flex",
        alignItems: "center",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            cursor: "pointer",
        },
    },
    "& .MuiListItemIcon-root": {
        minWidth: "30px",
        paddingBottom: "2px",
        opacity: 0.6,
        color: theme.palette.secondary.main,
    },
    "& .MuiSvgIcon-root": {
        fontSize: "1.5rem",
    },
    "& .MuiSelect-icon": {
        fontSize: 15,
        color: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "4px",
        borderWidth: "0px",
    },
    "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
        paddingLeft: "7px",
        paddingRight: "25px",
        height: "33px",
    },
}));
