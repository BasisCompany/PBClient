import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CommentRating } from "../CommentRating";
import { CommentItemMenu } from "../CommentItemMenu";
import { FC, useState } from "react";
import { FlexBox } from "../../../../../UI/FlexBox";
import { useMobileDevice } from "../../../../../hooks/useMobileDevice";

interface CommentReplyAnswerProps {
    replyData: {
        id: number;
        message: string;
        rating: number;
        likes: number;
        dislikes: number;
        isReply: boolean;
        createdAt: string;
        updatedAt: string;
        userId: number;
        replyId: null;
        user: {
            id: number;
            email: string;
            username: string;
        };
    };
}

export const CommentReplyAnswer: FC<CommentReplyAnswerProps> = ({
    replyData,
}) => {
    const isMobile = useMobileDevice();
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };
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
                                _Gvozd_
                            </Typography>
                        </Tooltip>
                        {!isMobile && (
                            <NavigateNextIcon
                                sx={{ fontSize: "15px", mr: 1 }}
                            />
                        )}
                        <Typography
                            variant="h5"
                            component="span"
                            color={(theme) => theme.palette.text.secondary}
                            fontSize={13}
                            fontWeight={500}
                            sx={{ mt: isMobile ? 0.5 : 0 }}
                        >
                            8 декабря 2022
                        </Typography>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis, neque. Ut magnam quae pariatur
                        delectus autem laudantium id! Magni, explicabo. Fugit a
                        quisquam ut aliquid excepturi blanditiis iusto dolore
                        ex?
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 0.5, pl: "5px", pb: 1 }}>
                <CommentRating />
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
