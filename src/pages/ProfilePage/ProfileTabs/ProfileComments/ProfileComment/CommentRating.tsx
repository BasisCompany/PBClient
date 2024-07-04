import { FC } from "react";
import { alpha, Box, IconButton, Tooltip, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    Comment,
    useAddLikeMutation,
    useDeleteLikeMutation,
} from "@/entities/comment";
import { pbColors } from "@/app/providers/Theme";

interface CommentRatingProps {
    comment: Comment;
}

export const CommentRating: FC<CommentRatingProps> = ({
    comment: { id, likes, dislikes, current_mark, isReply },
}) => {
    const [addLike] = useAddLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();

    const rating = likes - dislikes;

    const handleClickLike = async (type: boolean) => {
        if (current_mark === undefined) {
            return;
        }
        if (current_mark === null || current_mark !== type) {
            await addLike({ commentId: id, type: type, isReply });
        } else if (current_mark === type) {
            await deleteLike({ commentId: id, isReply });
        }
    };

    return (
        <Box>
            <IconButton
                onClick={() => void handleClickLike(true)}
                sx={{
                    bgcolor: current_mark
                        ? alpha(pbColors.green, 0.15)
                        : "none",
                }}
            >
                <KeyboardArrowUpIcon
                    sx={{
                        color: alpha(pbColors.green, 1),
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
            <IconButton
                onClick={() => void handleClickLike(false)}
                sx={{
                    bgcolor:
                        current_mark === false
                            ? alpha(pbColors.red, 0.15)
                            : "none",
                }}
            >
                <KeyboardArrowUpIcon
                    sx={{
                        color: alpha(pbColors.red, 1),
                        fontSize: "20px",
                        rotate: "180deg",
                    }}
                />
            </IconButton>
        </Box>
    );
};
