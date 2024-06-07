import { IconButton, IconButtonProps } from "@mui/material";
import { forwardRef } from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

type LinkIconButtonProps = IconButtonProps & RouterLinkProps;

export const LinkIconButton = forwardRef<HTMLElement, LinkIconButtonProps>(
    ({ children, to, ...props }, ref) => (
        <IconButton component={LinkBehavior} to={to} ref={ref} {...props}>
            {children}
        </IconButton>
    )
);
