import { styled, MenuItemProps, MenuItem } from "@mui/material";

export const CustomSelectMenuItem = styled((props: MenuItemProps) => (
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
