import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface CommentMessageProps {
    message: string;
}

export const CommentMessage: FC<CommentMessageProps> = ({ message }) => {
    return (
        <Box sx={{ mt: 1 }}>
            <Typography
                variant="body1"
                component="span"
                color={(theme) => theme.palette.text.primary}
                fontSize={16}
                fontWeight={400}
            >
                {message}
            </Typography>
        </Box>
    );
};
