import { FC } from "react";
import { Box, Tooltip } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ReplyTimestamp } from "./ReplyTimestamp";
import { Reply } from "@/entities/comment";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { FlexBox } from "@/shared/ui/FlexBox";
import { LinkTypography } from "@/shared/ui/Links";
import { getUrlRoot } from "@/shared/utils/getUrlRoot";
import { Avatar } from "@/shared/ui/Image/Avatar";

interface ReplyAuthorProps {
    reply: Reply;
}

export const ReplyAuthor: FC<ReplyAuthorProps> = ({ reply }) => {
    const isMobile = useMobileDevice();
    const { user } = reply;
    return (
        <FlexBox sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <LinkTypography to={`/user/${user.id}`}>
                <Avatar
                    src={getUrlRoot(user.avatar)}
                    alt={user.username}
                    width="32px"
                    height="32px"
                    sx={{ borderRadius: "50%", cursor: "pointer", mr: 1 }}
                />
            </LinkTypography>
            <Tooltip title="Автор">
                <Box>
                    <LinkTypography
                        to={`/user/${user.id}`}
                        variant="text"
                        fontSize={15}
                        fontWeight={500}
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            mr: 1,
                            ml: 1,
                        }}
                    >
                        {reply.user.username}
                    </LinkTypography>
                </Box>
            </Tooltip>
            {!isMobile && <NavigateNextIcon sx={{ fontSize: "15px", mr: 1 }} />}
            <ReplyTimestamp time={reply.createdAt} />
        </FlexBox>
    );
};
