import { FC } from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ReplyTimestamp } from "./ReplyTimestamp";
import { Reply } from "@/entities/comment";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { FlexBox } from "@/shared/ui/FlexBox";

interface ReplyAuthorProps {
    reply: Reply;
}

export const ReplyAuthor: FC<ReplyAuthorProps> = ({ reply }) => {
    const isMobile = useMobileDevice();

    return (
        <FlexBox sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Avatar
                alt="Remy Sharp"
                src="https://sneg.top/uploads/posts/2023-06/1687912638_sneg-top-p-avatarka-dlya-kvorka-vkontakte-10.jpg"
                sx={{ width: 26, height: 26, mr: 1.5 }}
            />
            <Tooltip title="Автор">
                <Typography
                    variant="text"
                    color={(theme) => theme.palette.text.primary}
                    fontSize={15}
                    fontWeight={500}
                    sx={{ mr: 1 }}
                >
                    {reply.user.username}
                </Typography>
            </Tooltip>
            {!isMobile && <NavigateNextIcon sx={{ fontSize: "15px", mr: 1 }} />}
            <ReplyTimestamp time={reply.createdAt} />
        </FlexBox>
    );
};
