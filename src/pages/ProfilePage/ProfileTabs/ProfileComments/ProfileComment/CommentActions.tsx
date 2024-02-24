import { FC } from "react";
import { useParams } from "react-router";
import { Button, ButtonProps, styled } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import { CommentRating } from "./CommentRating";
import { Comment } from "@/entities/comment";
import { useAuth } from "@/shared/hooks/useAuth";
import { Authorization } from "@/shared/lib/authorization";
import { POLICIES } from "@/shared/lib/authorization/policies";
import { FlexBox } from "@/shared/ui/FlexBox";

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
    const { user } = useAuth();
    const { id } = useParams();

    return (
        <FlexBox sx={{ justifyContent: "space-between" }}>
            <FlexBox
                sx={{
                    alignItems: "center",
                    ml: "-8px",
                    mt: 0.5,
                }}
            >
                <CommentRating comment={comment} />
                <Authorization
                    policyCheck={POLICIES["profile:local"](user, id)}
                >
                    {comment.reply ? null : isOpenReply ? (
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
                </Authorization>
            </FlexBox>
        </FlexBox>
    );
};
