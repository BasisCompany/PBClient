import { FC } from "react";
import { Comment } from "../../../../../../types/comments.type";
import { ReplyInput } from "./ReplyInput";
import { ReplyMessage } from "./ReplyMessage";

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
