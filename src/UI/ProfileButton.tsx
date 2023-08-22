import { styled, Button } from "@mui/material";

export const ProfileButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.bgcolor.secondary.main,
    textTransform: "none",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    "&:hover": {
        backgroundColor: theme.palette.bgcolor.secondary.hover,
    },
})) as typeof Button;
