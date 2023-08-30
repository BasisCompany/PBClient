import {
    Box,
    Typography,
    styled,
    Avatar,
    Rating,
    IconButton,
    ButtonProps,
    Button,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../UI/FlexBox";
import { useMemo, useReducer, useState } from "react";
import { CommentItemMenu } from "./CommentItemMenu";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import { CommentReplyInput } from "./CommentItemReply/CommentReplyInput";
import { CommentReplyAnswer } from "./CommentItemReply/CommentReplyAnswer";
import { CommentRating } from "./CommentRating";

const CommentBox = styled(Box)(({ theme }) => ({
    padding: "10px",
    paddingLeft: "0px",
    marginBottom: "8px",
    backgroundColor: theme.palette.bgcolor.primary.main,
    borderRadius: "4px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        bgcolor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

const ReplyButton = styled((props: ButtonProps) => (
    <Button size="small" {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: theme.palette.bgcolor.primary.main,
    color: theme.palette.text.secondary,
}));

export const ProfileCommentItem = () => {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [isOpenReply, toggleReply] = useReducer((state) => !state, false);

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };
    
    const username = "Stormpero";
    const comment1 = {
        likes: 1,
        dislike: 0,
        rating: 1,
        text: "text",
        isReply: true,
        reply: {
            text: "2323",
            likes: 1,
            dislike: 0,
            rating: 1,
            isReply: false,
        },
    };

    const comment2 = { ...comment1, isReply: false };

    const comment = useMemo(
        () => (Math.random() > 0.5 ? comment1 : comment2),
        []
    );

    return (
        <CommentBox>
            <Box sx={{ pl: "12px" }}>
                <FlexBox sx={{ justifyContent: "space-between" }}>
                    <FlexBox sx={{ alignItems: "center" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                            sx={{ width: 52, height: 52, cursor: "pointer" }}
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
                                        ":hover": {
                                            color: (theme) =>
                                                theme.palette.text.secondary,
                                        },
                                    }}
                                >
                                    {username}
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
                                        ":hover": {
                                            color: (theme) =>
                                                theme.palette.text.primary,
                                        },
                                    }}
                                >
                                    Prompt url name test
                                </Typography>
                            </Box>
                            <Box>
                                <Rating name="read-only" value={3} readOnly />
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
                        7 декабря 2022
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis, neque. Ut magnam quae pariatur
                        delectus autem laudantium id! Magni, explicabo. Fugit a
                        quisquam ut aliquid excepturi blanditiis iusto dolore
                        ex?
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pl: "2px" }}>
                <CommentRating />
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
            {comment.isReply ? (
                <CommentReplyAnswer />
            ) : (
                isOpenReply && <CommentReplyInput />
            )}
            <CommentItemMenu
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
            />
        </CommentBox>
    );
};
