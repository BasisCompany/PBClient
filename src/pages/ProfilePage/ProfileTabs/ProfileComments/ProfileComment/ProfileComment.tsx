import { FC, useReducer, useState } from "react";
import { Box, styled, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../../UI/FlexBox";
import { Comment } from "../../../../../types/comments.type";
import { useSnackbar } from "../../../../../UI/Snackbar/useSnackbar";
import {
    getErrorMessage,
    ApiError,
} from "../../../../../modules/Error/apiError";
import { useDeleteCommentMutation } from "../store/profileCommentsApi";
import { usePopperMenu } from "../../../../../hooks/usePopperMenu";
import { CommentReportDialog } from "./CommentReportDialog";
import { CommentAuthor } from "./CommentAuthor";
import { CommentMessage } from "./CommentMessage";
import { CommentTimestamp } from "./CommentTimestamp";
import { CommentActions } from "./CommentActions";
import { CommentPopperMenu } from "./CommentPopperMenu";
import { CommentReply } from "./CommentReply/CommentReply";

const CommentBox = styled(Box)(({ theme }) => ({
    padding: "10px",
    paddingLeft: "0px",
    marginBottom: "8px",
    backgroundColor: theme.palette.bgcolor.primary.main,
    borderRadius: "5px",
}));

interface ProfileCommentProps {
    comment: Comment;
}

export const ProfileComment: FC<ProfileCommentProps> = ({ comment }) => {
    const [showAlert] = useSnackbar();

    const [deleteComment] = useDeleteCommentMutation();

    const { menuAnchor, handleOpenMenu, handleCloseMenu } = usePopperMenu();
    const [isOpenReply, toggleReply] = useReducer((state) => !state, false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleReport = () => {
        setOpenDialog(true);
    };

    const handleDeleteComment = async () => {
        try {
            await deleteComment(comment.id).unwrap();
            showAlert("success", "Комментарий удален");
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.error(error);
        }
    };

    return (
        <>
            <CommentBox>
                <Box sx={{ pl: "4px" }}>
                    <FlexBox sx={{ justifyContent: "space-between" }}>
                        <CommentAuthor comment={comment} />
                        <FlexBox sx={{ alignItems: "end" }}>
                            <IconButton onClick={handleOpenMenu}>
                                <MoreHorizIcon />
                            </IconButton>
                        </FlexBox>
                    </FlexBox>
                    <CommentTimestamp time={comment.createdAt} />
                    <CommentMessage message={comment.message} />
                </Box>
                <CommentActions
                    comment={comment}
                    isOpenReply={isOpenReply}
                    toggleReply={toggleReply}
                />
                <CommentReply comment={comment} isOpenReply={isOpenReply} />
            </CommentBox>
            <CommentPopperMenu
                comment={comment}
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
                handleReport={handleReport}
                handleDelete={handleDeleteComment}
            />
            <CommentReportDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                commentId={comment.id}
            />
        </>
    );
};
