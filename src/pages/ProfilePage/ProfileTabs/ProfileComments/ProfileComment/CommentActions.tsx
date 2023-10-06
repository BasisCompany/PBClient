import { FC } from "react";
import { Box, Button, ButtonProps, styled } from "@mui/material";
import { CommentRating } from "./CommentRating";
import { Comment } from "../../../../../types/comments.type";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";

const ReplyButton = styled((props: ButtonProps) => (
    <Button size="small" disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: theme.palette.bgcolor.primary.main,
    color: theme.palette.text.secondary,
    ":hover": {
        color: theme.palette.text.primary,
    },
}));

interface CommentActionsProps {
    comment: Comment;
    isOpenReply: boolean;
    toggleReply: () => void;
}

export const CommentActions: FC<CommentActionsProps> = ({
    comment,
    isOpenReply,
    toggleReply,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                ml: "-8px",
                mt: 0.5,
            }}
        >
            <CommentRating likes={comment.likes} dislikes={comment.dislikes} />
            {comment.reply ? null : isOpenReply ? (
                <ReplyButton startIcon={<CloseIcon />} onClick={toggleReply}>
                    Отменить
                </ReplyButton>
            ) : (
                <ReplyButton startIcon={<ReplyIcon />} onClick={toggleReply}>
                    Ответить
                </ReplyButton>
            )}
        </Box>
    );
};
