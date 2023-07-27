import { styled, Box, BoxProps } from "@mui/material";

export const CenterBox = styled(Box)<BoxProps>(({ theme }) => ({
    background: theme.palette.background.default,
    position: "relative",
    minHeight: "calc(100vh - 80px)",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
