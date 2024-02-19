import { styled, TabProps, Tab } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const CustomTab = styled((props: TabProps & RouterLinkProps) => (
    <Tab
        component={LinkBehavior}
        iconPosition="start"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    textTransform: "none",
    paddingLeft: "0",
    paddingRight: "0",
    fontSize: theme.typography.pxToRem(19),
    marginRight: theme.spacing(5),
    color: theme.palette.text.secondary,
    minHeight: "0px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        color: theme.palette.text.primary,
        transition: "all 0.1s ease-out",
    },
    "&.Mui-selected": {
        color: theme.palette.text.primary,
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
}));
