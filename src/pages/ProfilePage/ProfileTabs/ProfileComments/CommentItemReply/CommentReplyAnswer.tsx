import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CommentRating } from "../CommentRating";
import { CommentItemMenu } from "../CommentItemMenu";
import { FC, useState } from "react";
import { FlexBox } from "../../../../../UI/FlexBox";
import { useMobileDevice } from "../../../../../hooks/useMobileDevice";
import { Reply } from "../../../../../types/comments.type";
import {
    formatTimeDistanceToNow,
    formatTimeFull,
} from "../../../../../utils/timeFormatter";

interface CommentReplyAnswerProps {
    reply: Reply;
}

export const CommentReplyAnswer: FC<CommentReplyAnswerProps> = ({ reply }) => {
    const isMobile = useMobileDevice();
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    const timeFormatDistanceToNow = formatTimeDistanceToNow(reply.createdAt);
    const fullTime = formatTimeFull(reply.createdAt);

    return (
        <Box
            sx={{
                mt: 1,
                ml: 6,
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                borderRadius: "5px",
            }}
        >
            <Box sx={{ pt: 2, pr: 2, pl: 2 }}>
                <FlexBox sx={{ justifyContent: "space-between" }}>
                    <FlexBox sx={{ alignItems: "center", flexWrap: "wrap" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://sneg.top/uploads/posts/2023-06/1687912638_sneg-top-p-avatarka-dlya-kvorka-vkontakte-10.jpg"
                            sx={{ width: 26, height: 26, mr: 1.5 }}
                        />
                        <Tooltip title="Автор">
                            <Typography
                                variant="h5"
                                component="span"
                                color={(theme) => theme.palette.text.primary}
                                fontSize={15}
                                fontWeight={500}
                                sx={{ mr: 1 }}
                            >
                                {reply.user.username}
                            </Typography>
                        </Tooltip>
                        {!isMobile && (
                            <NavigateNextIcon
                                sx={{ fontSize: "15px", mr: 1 }}
                            />
                        )}
                        <Tooltip title={fullTime}>
                            <Typography
                                variant="h5"
                                component="span"
                                color={(theme) => theme.palette.text.secondary}
                                fontSize={13}
                                fontWeight={500}
                                sx={{ mt: isMobile ? 0.5 : 0 }}
                            >
                                {timeFormatDistanceToNow}
                            </Typography>
                        </Tooltip>
                    </FlexBox>

                    <IconButton size="small" onClick={handleClickMenu}>
                        <MoreHorizIcon />
                    </IconButton>
                </FlexBox>
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="body1"
                        component="span"
                        color={(theme) => theme.palette.text.primary}
                        fontSize={16}
                        fontWeight={400}
                    >
                        {reply.message}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 0.5, pl: "5px", pb: 1 }}>
                <CommentRating likes={reply.likes} dislikes={reply.dislikes} />
            </Box>
            <CommentItemMenu
                bgcolorSecondary
                menuAnchor={menuAnchor}
                onMenuClose={handleCloseMenu}
            />
        </Box>
    );
};

/* 
<Tooltip title="Автор">
    <Avatar
        sx={{
            bgcolor: (theme) =>
                theme.palette.secondary.main,
            width: 18,
            height: 18,
            ml: 1,
        }}
    >
        <PersonIcon
            sx={{
                fontSize: "14px",
                color: (theme) =>
                    theme.palette.text.primary,
            }}
        />
    </Avatar>
</Tooltip> 
*/
