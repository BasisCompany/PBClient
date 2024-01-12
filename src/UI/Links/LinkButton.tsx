import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const LinkButton: FC<ButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <Button component={LinkBehavior} to={to} {...props}>
        {children}
    </Button>
);
