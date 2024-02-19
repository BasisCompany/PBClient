import { forwardRef } from "react";
import {
    LinkProps as RouterLinkProps,
    Link as RouterLink,
} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LinkBehavior = forwardRef<any, RouterLinkProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
));
