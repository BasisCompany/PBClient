import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FC } from "react";

interface CommentRatingProps {
    likes: number;
    dislikes: number;
}

export const CommentRating: FC<CommentRatingProps> = ({ likes, dislikes }) => {
    const rating = likes - dislikes;
    return (
        <Box>
            <IconButton>
                <KeyboardArrowUpIcon
                    sx={{
                        color: "lime",
                        fontSize: "20px",
                    }}
                />
            </IconButton>
            <Tooltip title={`Лайки: ${likes}, Дизлайки: ${dislikes}`}>
                <Typography
                    variant="h6"
                    component="span"
                    color={(theme) => theme.palette.text.primary}
                    fontSize={16}
                    fontWeight={400}
                    sx={{
                        mr: 1,
                        ml: 1,
                        cursor: "default",
                        ":hover": {
                            color: (theme) => theme.palette.text.secondary,
                        },
                    }}
                >
                    {rating}
                </Typography>
            </Tooltip>
            <IconButton>
                <KeyboardArrowUpIcon
                    sx={{
                        color: "red",
                        fontSize: "20px",
                        rotate: "180deg",
                    }}
                />
            </IconButton>
        </Box>
    );
};
