import {
    Box,
    Typography,
    styled,
    Avatar,
    Rating,
    IconButton,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FlexBox } from "../../../../UI/FlexBox";

const CommentBox = styled(Box)(({ theme }) => ({
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: theme.palette.bgcolor.primary.main,
    borderRadius: "4px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        bgcolor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

export const ProfileCommentItem = () => {
    const username = "Stormpero";
    return (
        <CommentBox>
            <FlexBox sx={{ justifyContent: "space-between" }}>
                <FlexBox sx={{ alignItems: "center" }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                        sx={{ width: 52, height: 52 }}
                    />
                    <Box sx={{ ml: 2 }}>
                        <Box>
                            <Typography
                                variant="h6"
                                component="span"
                                color="text.primary"
                                sx={{
                                    fontSize: 15,
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                }}
                            >
                                Username
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                component="span"
                                color="#bfbfc0"
                                sx={{
                                    fontSize: 14,
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    fontWeight: 400,
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
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </FlexBox>
            </FlexBox>
            <Box sx={{ mt: 1 }}>
                <Typography
                    variant="h6"
                    component="span"
                    color="#bfbfc0"
                    sx={{
                        fontSize: 14,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontWeight: 500,
                    }}
                >
                    7 декабря 2022
                </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography
                    variant="h6"
                    component="span"
                    color="text.primary"
                    sx={{
                        fontSize: 17,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontWeight: 400,
                    }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis, neque. Ut magnam quae pariatur delectus autem
                    laudantium id! Magni, explicabo. Fugit a quisquam ut aliquid
                    excepturi blanditiis iusto dolore ex?
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                    <KeyboardArrowUpIcon sx={{ color: "lime" }} />
                </IconButton>
                <Typography
                    variant="h6"
                    component="span"
                    color="text.primary"
                    fontSize={16}
                    fontWeight={400}
                    sx={{
                        mr: 1,
                        ml: 1,
                    }}
                >
                    2
                </Typography>
                <IconButton>
                    <KeyboardArrowDownIcon sx={{ color: "red" }} />
                </IconButton>
            </Box>
        </CommentBox>
    );
};
