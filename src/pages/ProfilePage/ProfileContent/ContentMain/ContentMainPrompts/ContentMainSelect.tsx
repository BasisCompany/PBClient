import {
    FormControl,
    ListItemIcon,
    MenuItem,
    MenuItemProps,
    SelectChangeEvent,
    SelectProps,
    Select,
    styled,
} from "@mui/material";
import { useState } from "react";
import { contentMainSelectListContent } from "./contentMainSelectListContent";

const CustomMenuItem = styled((props: MenuItemProps) => (
    <MenuItem {...props} />
))(({ theme }) => ({
    transition: "all 0.1s ease-out",
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    "& .MuiListItemIcon-root": {
        minWidth: "25px",
    },
    "&:hover:not(.Mui-selected)": {
        color: theme.palette.secondary.main,
        backgroundColor: "rgba(153, 51, 255,0.07)",
        transition: "all 0.1s ease-in",
        "& .MuiListItemIcon-root": {
            transition: "all 0.1s ease-in",
            color: theme.palette.secondary.main,
        },
    },
    "&.Mui-selected": {
        color: theme.palette.secondary.main,
        backgroundColor: "rgba(153, 51, 255,0.15) !important",
        "& .MuiListItemIcon-root": {
            color: theme.palette.secondary.main,
        },
        "&:hover": {
            backgroundColor: "rgba(153, 51, 255, 0.15)",
        },
    },
}));

const CustomSelect = styled((props: SelectProps) => <Select {...props} />)(
    ({ theme }) => ({
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
    })
);

export const ContentMainSelect = () => {
    const [select, setSelect] = useState("new");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };
    return (
        <FormControl>
            <CustomSelect value={select} onChange={handleChange}>
                {contentMainSelectListContent.map((item) => (
                    <CustomMenuItem value={item.value}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        {item.label}
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </FormControl>
    );
};
