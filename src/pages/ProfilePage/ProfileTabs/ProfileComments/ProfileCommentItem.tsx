import {
    Box,
    styled,
    Avatar,
    Rating,
    IconButton,
    ButtonProps,
    Button,
    Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../UI/FlexBox";
import { FC, useReducer, useState } from "react";
import { CommentItemMenu } from "./CommentItemMenu";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import { CommentReplyInput } from "./CommentItemReply/CommentReplyInput";
import { CommentReplyAnswer } from "./CommentItemReply/CommentReplyAnswer";
import { CommentRating } from "./CommentRating";
import { CommentReportDialog } from "./CommentReportDialog";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { Comment } from "./store/types/comments.type";

const CommentBox = styled(Box)(({ theme }) => ({
    padding: "10px",
    paddingLeft: "0px",
    marginBottom: "8px",
    backgroundColor: theme.palette.bgcolor.primary.main,
    borderRadius: "5px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        bgcolor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

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

interface ProfileCommentItemProps {
    comment: Comment;
}

export const ProfileCommentItem: FC<ProfileCommentItemProps> = ({
    comment,
}) => {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [isOpenReply, toggleReply] = useReducer((state) => !state, false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const timeFormatDistanceToNow = `${formatDistanceToNow(
        new Date(comment.createdAt),
        { locale: ru }
    )} назад`;

    return (
        <CommentBox>
            <Box sx={{ pl: "4px" }}>
                <FlexBox sx={{ justifyContent: "space-between" }}>
                    <FlexBox sx={{ alignItems: "center" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                            sx={{
                                width: 52,
                                height: 52,
                                cursor: "pointer",
                                mb: 1,
                            }}
                        />
                        <Box sx={{ ml: 2 }}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    component="span"
                                    color={(theme) =>
                                        theme.palette.text.primary
                                    }
                                    fontSize={15}
                                    fontWeight={500}
                                    letterSpacing="0.4px"
                                    sx={{
                                        cursor: "pointer",
                                        transition: "all 0.1s ease-in",
                                        ":hover": {
                                            color: (theme) =>
                                                theme.palette.text.secondary,
                                            transition: "all 0.1s ease-out",
                                        },
                                    }}
                                >
                                    {comment.user.username}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="span"
                                    color={(theme) =>
                                        theme.palette.text.secondary
                                    }
                                    fontSize={14}
                                    fontWeight={400}
                                    sx={{
                                        cursor: "pointer",
                                        transition: "all 0.1s ease-in",
                                        ":hover": {
                                            color: (theme) =>
                                                theme.palette.text.primary,
                                            transition: "all 0.1s ease-out",
                                        },
                                    }}
                                >
                                    Prompt url name test
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 0.25, ml: -0.2 }}>
                                <Rating
                                    name="read-only"
                                    value={comment.rating}
                                    readOnly
                                />
                            </Box>
                        </Box>
                    </FlexBox>
                    <FlexBox sx={{ alignItems: "end" }}>
                        <IconButton onClick={handleClickMenu}>
                            <MoreHorizIcon />
                        </IconButton>
                    </FlexBox>
                </FlexBox>
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="h5"
                        component="span"
                        color={(theme) => theme.palette.text.secondary}
                        fontSize={13}
                        fontWeight={500}
                    >
                        {timeFormatDistanceToNow}
                    </Typography>
                </Box>
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="body1"
                        component="span"
                        color={(theme) => theme.palette.text.primary}
                        fontSize={16}
                        fontWeight={400}
                    >
                        {comment.message}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: "-8px",
                    mt: 0.5,
                }}
            >
                <CommentRating
                    likes={comment.likes}
                    dislikes={comment.dislikes}
                />
                {comment.isReply ? null : isOpenReply ? (
                    <ReplyButton
                        startIcon={<CloseIcon />}
                        onClick={toggleReply}
                    >
                        Отменить
                    </ReplyButton>
                ) : (
                    <ReplyButton
                        startIcon={<ReplyIcon />}
                        onClick={toggleReply}
                    >
                        Ответить
                    </ReplyButton>
                )}
            </Box>
            {comment.reply ? (
                <CommentReplyAnswer replyData={comment.reply} />
            ) : (
                isOpenReply && <CommentReplyInput />
            )}
            <CommentItemMenu
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
                onReportOpen={() => setOpenDialog(true)}
            />
            <CommentReportDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            />
        </CommentBox>
    );
};
