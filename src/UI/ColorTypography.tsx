import { Typography, styled } from "@mui/material";

export const ColorTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
