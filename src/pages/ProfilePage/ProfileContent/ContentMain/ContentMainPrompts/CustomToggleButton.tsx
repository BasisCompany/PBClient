import { ToggleButtonProps, ToggleButton } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomToggleButtonProps extends ToggleButtonProps {
    colorbutton: string | "0,0,0";
}

export const CustomToggleButton = styled((props: CustomToggleButtonProps) => (
    <ToggleButton {...props} />
))(({ theme, colorbutton }) => ({
    width: "120px",
    height: "60px",
    borderWidth: "0px",
    borderLeft: "none !important",
    borderRight: "none !important",
    transition: "all 0.2s ease-out",
    color: `rgba(${colorbutton}, 0.5)`,
    "& .MuiSvgIcon-root": {
        fontSize: "2rem",
        fill: theme.palette.text.secondary,
    },
    "&:hover": {
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
        transition: "all 0.2s ease-out",
    },
    "&:hover:not(.Mui-selected)": {
        color: `rgba(${colorbutton}, 0.5)`,
        borderBottom: `5px solid rgba(${colorbutton}, 0.5)`,
        backgroundColor: "transparent",
        transition: "all 0.2s ease-in",
    },
    "&.Mui-selected": {
        transition: "all 0.2s ease-in",
        //backgroundColor: `rgba(${colorbutton}, 0.4)`,
        backgroundColor: "transparent",
        marginLeft: "none",
        color: `rgba(${colorbutton}, 1)`,
        "&:hover": {
            color: `rgba(${colorbutton}, 1)`,
            backgroundColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
            fill: `rgba(${colorbutton}, 1)`,
        },
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
    },
    "&.MuiToggleButton-root:not(:first-of-type)": {
        marginLeft: "0",
    },
}));
