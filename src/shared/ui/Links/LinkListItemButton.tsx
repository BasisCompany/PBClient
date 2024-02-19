import { ListItemButton, ListItemButtonProps } from "@mui/material";
import { FC } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const LinkListItemButton: FC<ListItemButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <ListItemButton component={LinkBehavior} to={to} {...props}>
        {children}
    </ListItemButton>
);
