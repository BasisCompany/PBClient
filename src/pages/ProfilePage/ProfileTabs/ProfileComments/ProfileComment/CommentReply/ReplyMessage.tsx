import { FC, useState } from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../../../UI/FlexBox";
import { useSnackbar } from "../../../../../../UI/Snackbar/useSnackbar";
import {
    ApiError,
    getErrorMessage,
} from "../../../../../../modules/Error/apiError";
import { Reply, Comment } from "../../../../../../types/comments.type";
import { useDeleteReplyMutation } from "../../store/profileCommentsApi";
import { CommentPopperMenu } from "../CommentPopperMenu";
import { CommentRating } from "../CommentRating";
import { ReplyAuthor } from "./ReplyAuthor";
import { CommentReportDialog } from "../CommentReportDialog";
import { usePopperMenu } from "../../../../../../hooks/usePopperMenu";

const ReplyBox = styled(Box)(({ theme }) => ({
    marginTop: "8px",
    marginLeft: "48px",
    borderRadius: "5px",
    backgroundColor: theme.palette.bgcolor.secondary.main,
}));

interface ReplyMessageProps {
    reply: Reply;
}

export const ReplyMessage: FC<ReplyMessageProps> = ({ reply }) => {
    const [showAlert] = useSnackbar();

    const [deleteReply] = useDeleteReplyMutation();

    const { menuAnchor, handleOpenMenu, handleCloseMenu } = usePopperMenu();
    const [openDialog, setOpenDialog] = useState(false);

    const handleReport = () => {
        setOpenDialog(true);
    };

    const handleDeleteReply = async () => {
        try {
            await deleteReply(reply.id).unwrap();
            showAlert("success", "Ответ удален");
        } catch (error) {
            showAlert("error", getErrorMessage(error as ApiError));
            console.log(error);
        }
    };

    return (
        <>
            <ReplyBox>
                <Box sx={{ pt: 2, pr: 2, pl: 2 }}>
                    <FlexBox sx={{ justifyContent: "space-between" }}>
                        <ReplyAuthor reply={reply} />
                        <IconButton size="small" onClick={handleOpenMenu}>
                            <MoreHorizIcon />
                        </IconButton>
                    </FlexBox>
                    <Box sx={{ mt: 1, overflow: "hidden" }}>
                        <Typography
                            variant="body1"
                            component="span"
                            color={(theme) => theme.palette.text.primary}
                            fontSize={16}
                            fontWeight={400}
                        >
                            {reply.message}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 0.5, pl: "5px", pb: 1 }}>
                    <CommentRating comment={reply as Comment} />
                </Box>
            </ReplyBox>
            <CommentPopperMenu
                comment={reply as Comment}
                bgcolorSecondary
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
                handleReport={handleReport}
                handleDelete={handleDeleteReply}
            />
            <CommentReportDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                commentId={reply.id}
            />
        </>
    );
};
