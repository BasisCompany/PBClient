import { FC } from "react";
import { ButtonProps } from "@mui/material";
import { LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkBehavior } from "../../Route/LinkBehavior";
import { PrimaryButton } from "./PrimaryButton";

export const PrimaryLinkButton: FC<ButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <PrimaryButton component={LinkBehavior} to={to} {...props}>
        {children}
    </PrimaryButton>
);
