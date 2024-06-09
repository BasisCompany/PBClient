import { styled, Box, BoxProps } from "@mui/material";

export const SecondaryBox = styled(Box)<BoxProps>(({ theme }) => ({
    borderRadius: "15px",
    backgroundColor: theme.palette.bgcolor.secondary.main,
}));
