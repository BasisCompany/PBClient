import { FC } from "react";
import { Box, IconButton, Theme, Tooltip, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    useAddLikeMutation,
    useDeleteLikeMutation,
} from "../store/profileCommentsApi";
import { Comment } from "../../../../../types/comments.type";
import { useSnackbar } from "../../../../../UI/Snackbar/useSnackbar";
import {
    getErrorMessage,
    ApiError,
} from "../../../../../modules/Error/apiError";

function getLikeBgColor(isReply: boolean, theme: Theme) {
    return isReply
        ? theme.palette.bgcolor.secondary.hover
        : theme.palette.bgcolor.primary.hover;
}

interface CommentRatingProps {
    comment: Comment;
}

export const CommentRating: FC<CommentRatingProps> = ({
    comment: { id, likes, dislikes, current_mark, isReply },
}) => {
    const [showAlert] = useSnackbar();
    const [addLike] = useAddLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();

    const rating = likes - dislikes;

    const handleClickLike = async (type: boolean) => {
        if (current_mark === undefined) {
            return;
        }
        try {
            if (current_mark === null || current_mark !== type) {
                await addLike({ commentId: id, type: type, isReply }).unwrap();
            } else if (current_mark === type) {
                await deleteLike({ commentId: id, isReply }).unwrap();
            }
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.error(error);
        }
    };

    return (
        <Box>
            <IconButton
                onClick={() => void handleClickLike(true)}
                sx={{
                    bgcolor: (theme) =>
                        current_mark ? getLikeBgColor(isReply, theme) : "none",
                }}
            >
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
            <IconButton
                onClick={() => void handleClickLike(false)}
                sx={{
                    bgcolor: (theme) =>
                        current_mark === false
                            ? getLikeBgColor(isReply, theme)
                            : "none",
                }}
            >
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
