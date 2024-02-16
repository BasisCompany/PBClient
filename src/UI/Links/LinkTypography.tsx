import { FC } from "react";
import { Link, LinkProps } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const LinkTypography: FC<LinkProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <Link component={LinkBehavior} to={to} {...props}>
        {children}
    </Link>
);
