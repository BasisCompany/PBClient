import { ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomToggleButtonGroup = styled(
    (props: ToggleButtonGroupProps) => <ToggleButtonGroup {...props} />
)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        transition: "all 0.2s ease-out",
        margin: 0,
        border: 0,
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:first-of-type": {
            marginRight: "5px",
            borderRadius: theme.shape.borderRadius,
        },

        "&:hover:not(.Mui-selected)": {
            backgroundColor: "rgba(153, 51, 255,0.2)",
            transition: "all 0.2s ease-in",
            "& .MuiListItemIcon-root": {},
        },
        "&.Mui-selected": {
            backgroundColor: "rgba(153, 51, 255,0.4)",
            "&:hover": {
                backgroundColor: "rgba(153, 51, 255,0.4)",
            },
        },
    },
}));
