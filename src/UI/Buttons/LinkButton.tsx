import { FC, forwardRef } from "react";
import { ButtonProps } from "@mui/material";
import {
    LinkProps as RouterLinkProps,
    Link as RouterLink,
} from "react-router-dom";
import { CustomButton } from "./CustomButton";

const LinkBehavior = forwardRef<any, RouterLinkProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
));

export const LinkButton: FC<ButtonProps & RouterLinkProps> = ({
    children,
    to,
    ...props
}) => (
    <CustomButton component={LinkBehavior} to={to} {...props}>
        {children}
    </CustomButton>
);
