import { forwardRef } from "react";
import {
    LinkProps as RouterLinkProps,
    Link as RouterLink,
} from "react-router-dom";

export const LinkBehavior = forwardRef<any, RouterLinkProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
));
