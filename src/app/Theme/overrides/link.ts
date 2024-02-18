import { Theme } from "@mui/material";
import { LinkProps } from "@mui/material/Link";
import { LinkBehavior } from "../../../UI/Route/LinkBehavior";

export const MuiLink = {
    styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
            color: theme.palette.text.primary,
            ":hover": {
                color: theme.palette.text.secondary,
            },
        }),
    },
    defaultProps: {
        component: LinkBehavior,
        underline: "none",
    } as LinkProps,
};

// declare module "@mui/material/styles" {
//     interface LinkProps
// }
