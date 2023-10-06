import { FC, useReducer, useState } from "react";
import { Box, styled, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../../UI/FlexBox";
import { CommentReportDialog } from "./modals/CommentReportDialog";
import { Comment } from "../../../../../types/comments.type";
import { useSnackbar } from "../../../../../UI/Snackbar/useSnackbar";
import {
    getErrorMessage,
    ApiError,
} from "../../../../../modules/Error/apiError";
import { useDeleteCommentMutation } from "../store/profileCommentsApi";
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
    backgroundColor: "theme.palette.bgcolor.primary.main",
    borderRadius: "5px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        bgcolor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

interface ProfileCommentProps {
    comment: Comment;
}

export const ProfileComment: FC<ProfileCommentProps> = ({ comment }) => {
    const [showAlert] = useSnackbar();

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [isOpenReply, toggleReply] = useReducer((state) => !state, false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const [deleteComment, { isLoading }] = useDeleteCommentMutation();

    const handleDeleteComment = async () => {
        try {
            await deleteComment(comment.id).unwrap();
            showAlert("success", "Комментарий удален");
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.log(error);
        }
    };

    return (
        <>
            <CommentBox>
                <Box sx={{ pl: "4px" }}>
                    <FlexBox sx={{ justifyContent: "space-between" }}>
                        <CommentAuthor comment={comment} />
                        <FlexBox sx={{ alignItems: "end" }}>
                            <IconButton onClick={handleClickMenu}>
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
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
                onReportOpen={() => setOpenDialog(true)}
                handleDelete={handleDeleteComment}
            />
            <CommentReportDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            />
        </>
    );
};
