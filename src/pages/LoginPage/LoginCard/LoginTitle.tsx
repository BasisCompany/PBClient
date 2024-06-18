import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const LoginTitle: FC = () => (
    <Box sx={{ mb: 5 }}>
        <Box sx={{ textAlign: "center" }}>
            <Typography
                component="span"
                variant="h6"
                color="text.primary"
                sx={{
                    fontSize: 30,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    cursor: "default",
                }}
            >
                Вход
            </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
            <Typography
                color="text.secondary"
                sx={{
                    margin: 0,
                    fontSize: 14,
                    visibility: "visible",
                    maxHeight: "150px",
                    WebkitLineClamp: "2",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    cursor: "default",
                }}
            >
                Пожалуйста, войдите, чтобы продолжить.
            </Typography>
        </Box>
    </Box>
);
