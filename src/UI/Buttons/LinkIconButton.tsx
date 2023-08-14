import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";
import { LinkBehavior } from "../Route/LinkBehavior";
import { LinkProps as RouterLinkProps } from "react-router-dom";

export const LinkIconButton: FC<IconButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <IconButton component={LinkBehavior} to={to} {...props}>
        {children}
    </IconButton>
);
