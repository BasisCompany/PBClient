import { ListItemButton, ListItemButtonProps } from "@mui/material";
import { FC } from "react";
import { LinkBehavior } from "../Route/LinkBehavior";
import { LinkProps as RouterLinkProps } from "react-router-dom";

export const LinkListItemButton: FC<ListItemButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <ListItemButton component={LinkBehavior} to={to} {...props}>
        {children}
    </ListItemButton>
);
