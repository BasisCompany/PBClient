import { styled, Button } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
})) as typeof Button;
