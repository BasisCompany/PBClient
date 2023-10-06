import { FC } from "react";
import { Avatar, Box, Typography, Rating } from "@mui/material";
import { FlexBox } from "../../../../../UI/FlexBox";
import { Comment } from "../../../../../types/comments.type";

interface CommentAuthorProps {
    comment: Comment;
}

export const CommentAuthor: FC<CommentAuthorProps> = ({ comment }) => {
    return (
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
                        color={(theme) => theme.palette.text.primary}
                        fontSize={15}
                        fontWeight={500}
                        letterSpacing="0.4px"
                        sx={{
                            cursor: "pointer",
                            transition: "all 0.1s ease-in",
                            ":hover": {
                                color: (theme) => theme.palette.text.secondary,
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
                        color={(theme) => theme.palette.text.secondary}
                        fontSize={14}
                        fontWeight={400}
                        sx={{
                            cursor: "pointer",
                            transition: "all 0.1s ease-in",
                            ":hover": {
                                color: (theme) => theme.palette.text.primary,
                                transition: "all 0.1s ease-out",
                            },
                        }}
                    >
                        Prompt url name test
                    </Typography>
                </Box>
                <Box sx={{ mt: 0.25, ml: -0.2 }}>
                    <Rating name="read-only" value={comment.rating} readOnly />
                </Box>
            </Box>
        </FlexBox>
    );
};
