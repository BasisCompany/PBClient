import { FC } from "react";
import { ReplyInput } from "./ReplyInput";
import { ReplyMessage } from "./ReplyMessage";
import { Comment } from "@/entities/comment";

interface CommentReplyProps {
    comment: Comment;
    isOpenReply: boolean;
}

export const CommentReply: FC<CommentReplyProps> = ({
    comment,
    isOpenReply,
}) => {
    return comment.reply ? (
        <ReplyMessage reply={comment.reply} />
    ) : (
        isOpenReply && <ReplyInput commentId={comment.id} />
    );
};
