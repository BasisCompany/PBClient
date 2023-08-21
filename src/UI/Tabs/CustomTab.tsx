import { styled, TabProps, Tab } from "@mui/material";
import { LinkBehavior } from "../Route/LinkBehavior";
import { LinkProps as RouterLinkProps } from "react-router-dom";

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
    color: "rgba(255, 255, 255, 0.7)",
    minHeight: "0px",
    "&.Mui-selected": {
        color: "#fff",
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
}));
