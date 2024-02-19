import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const LinkIconButton: FC<IconButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <IconButton component={LinkBehavior} to={to} {...props}>
        {children}
    </IconButton>
);
