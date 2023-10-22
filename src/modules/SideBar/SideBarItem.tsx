import { ListItem, ListItemProps, styled } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../../UI/Route/LinkBehavior";

export const SideBarItem = styled((props: ListItemProps & RouterLinkProps) => (
    <ListItem component={LinkBehavior} disablePadding {...props} />
))(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: "block",
    "& :hover": {
        borderRadius: "15px",
    },
}));
