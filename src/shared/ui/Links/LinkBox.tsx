import { FC } from "react";
import { Box, Link, LinkProps } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../Route/LinkBehavior";

export const LinkBox: FC<LinkProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <Link component={LinkBehavior} to={to} {...props}>
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
            }}
        />
    </Link>
);
