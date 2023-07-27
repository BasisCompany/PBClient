import { styled, Box, BoxProps } from "@mui/material";

export const CenterBox = styled(Box)<BoxProps>(({ theme }) => ({
    background: theme.palette.background.default,
    position: "relative",
    height: "80vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
