import { FC } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { ListItemProps, ListItem } from "@mui/material";
import { LinkBehavior } from "../Route/LinkBehavior";

export type LinkListItemProps = ListItemProps & RouterLinkProps;

export const LinkListItem: FC<LinkListItemProps> = ({
    children,
    to,
    ...props
}) => (
    <ListItem component={LinkBehavior} to={to} {...props}>
        {children}
    </ListItem>
);
