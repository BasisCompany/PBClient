import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface CommentMessageProps {
    message: string;
}

export const CommentMessage: FC<CommentMessageProps> = ({ message }) => {
    return (
        <Box sx={{ mt: 1 }}>
            <Typography variant="text">{message}</Typography>
        </Box>
    );
};
