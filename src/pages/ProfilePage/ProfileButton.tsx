import { styled, Button } from "@mui/material";

export const ProfileButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
})) as typeof Button;
