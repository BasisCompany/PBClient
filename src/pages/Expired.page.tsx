import { Box } from "@mui/material";
import { FC } from "react";
import { ExpiredForm } from "./ExpiredForm";

export const ExpiredPage: FC = () => {
    return (
        <Box
            sx={{
                background: "theme.palette.background.default",
                position: "relative",
                minHeight: "calc(100vh - 80px)",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ExpiredForm />
        </Box>
    );
};
