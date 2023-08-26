import {
    Box,
    Typography,
    styled,
    Avatar,
    Rating,
    IconButton,
    Tooltip,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../UI/FlexBox";
import { useState } from "react";
import { CommentItemMenu } from "./CommentItemMenu";

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
//TODO[Саша]: Выпадающее меню
export const ProfileCommentItem = () => {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMenuAnchor(null);
    };

    const username = "Stormpero";
    const comment = {
        likes: 1,
        dislike: 0,
        rating: 1,
        isReply: false,
    };

    return (
        <CommentBox>
            <Box sx={{ pl: "12px" }}>
                {/* bgcolor: "#32d" */}
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
                        <IconButton onClick={handleClick}>
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
                <IconButton>
                    <KeyboardArrowUpIcon
                        sx={{
                            color: "lime",
                            fontSize: "20px",
                        }}
                    />
                </IconButton>
                <Tooltip
                    title={`Лайки: ${comment.likes}, Дизлайки: ${comment.dislike}`}
                >
                    <Typography
                        variant="h6"
                        component="span"
                        color="text.primary"
                        fontSize={16}
                        fontWeight={400}
                        sx={{
                            mr: 1,
                            ml: 1,
                            cursor: "default",
                            ":hover": {
                                color: (theme) => theme.palette.text.secondary,
                            },
                        }}
                    >
                        {comment.rating}
                    </Typography>
                </Tooltip>
                <IconButton>
                    <KeyboardArrowUpIcon
                        sx={{
                            color: "red",
                            fontSize: "20px",
                            rotate: "180deg",
                        }}
                    />
                </IconButton>
            </Box>
            <CommentItemMenu
                menuAnchor={menuAnchor}
                onMenuClose={handleClose}
            />
        </CommentBox>
    );
};
