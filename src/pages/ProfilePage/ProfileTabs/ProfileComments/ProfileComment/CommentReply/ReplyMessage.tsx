import { FC, useState } from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CommentPopperMenu } from "../CommentPopperMenu";
import { CommentRating } from "../CommentRating";
import { CommentReportDialog } from "../CommentReportDialog";
import { ReplyAuthor } from "./ReplyAuthor";
import { Comment, Reply, useDeleteReplyMutation } from "@/entities/comment";
import { toaster } from "@/app/providers/Toast";
import { usePopperMenu } from "@/shared/hooks/usePopperMenu";
import { FlexBox } from "@/shared/ui/FlexBox";

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
    const [deleteReply] = useDeleteReplyMutation();

    const { menuAnchor, handleOpenMenu, handleCloseMenu } = usePopperMenu();
    const [openDialog, setOpenDialog] = useState(false);

    const handleReport = () => {
        setOpenDialog(true);
    };

    const handleDeleteReply = async () => {
        await deleteReply(reply.id)
            .unwrap()
            .then(() => toaster.success("Ответ удален"));
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
                        <Typography variant="text">{reply.message}</Typography>
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
