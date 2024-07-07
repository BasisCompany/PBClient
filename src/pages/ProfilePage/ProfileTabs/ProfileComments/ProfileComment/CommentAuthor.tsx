import { FC } from "react";
import { Box, Rating } from "@mui/material";
import { Comment } from "@/entities/comment";
import { FlexBox } from "@/shared/ui/FlexBox";
import { Avatar } from "@/shared/ui/Image/Avatar";
import { getUrlRoot } from "@/shared/utils/getUrlRoot";
import { LinkTypography } from "@/shared/ui/Links";

interface CommentAuthorProps {
    comment: Comment;
}

export const CommentAuthor: FC<CommentAuthorProps> = ({ comment }) => {
    const { user } = comment;
    return (
        <FlexBox sx={{ alignItems: "center" }}>
            <LinkTypography to={`/user/${user.id}`}>
                <Avatar
                    src={getUrlRoot(user.avatar)}
                    alt={user.username}
                    width="52px"
                    height="52px"
                    sx={{ borderRadius: "50%", cursor: "pointer", mb: 1 }}
                />
            </LinkTypography>
            <Box ml={2}>
                <Box>
                    <LinkTypography
                        to={`/user/${user.id}`}
                        variant="text"
                        fontSize={15}
                        fontWeight={500}
                        letterSpacing="0.4px"
                        sx={{
                            lineHeight: 1.334,
                            letterSpacing: "0em",
                            cursor: "pointer",
                            transition: "all 0.1s ease-in",
                            ":hover": {
                                color: (theme) => theme.palette.text.secondary,
                            },
                        }}
                    >
                        {user.username}
                    </LinkTypography>
                </Box>
                <Box>
                    <LinkTypography
                        to={`/prompt/${comment.prompt.url}`}
                        fontSize={14}
                        fontWeight={400}
                        sx={{
                            cursor: "pointer",
                            transition: "all 0.1s ease-in",
                            color: (theme) => theme.palette.text.secondary,
                            ":hover": {
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    >
                        {comment.prompt.title}
                    </LinkTypography>
                </Box>
                <Box sx={{ mt: 0.25, ml: -0.2 }}>
                    <Rating name="read-only" value={comment.rating} readOnly />
                </Box>
            </Box>
        </FlexBox>
    );
};
