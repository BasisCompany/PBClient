import { Box, IconButton, Tooltip, Typography, styled } from "@mui/material";
import { Spacer } from "../../../../../UI/Spacer";
import CloseIcon from "@mui/icons-material/Close";

const NotificationBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "8px",
    height: "90px",
    borderRadius: "4px",
    transition: "all 0.1s ease-in",
    "&:hover": {
        bgcolor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

export const ContentMainNotification = ({ i }: { i: number }) => {
    return (
        <NotificationBox
            sx={{
                bgcolor:
                    i < 5
                        ? (theme) => theme.palette.bgcolor.secondary.main
                        : "none",
            }}
        >
            <Box
                component="img"
                alt="Prompt"
                src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                sx={{
                    width: 70,
                    height: 80,
                    borderRadius: "10px",
                    objectFit: "cover",
                    p: "5px",
                }}
            />
            <Box
                sx={{
                    ml: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "5px",
                        rowGap: "0px",
                        lineHeight: 1,
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        color="text.primary"
                        sx={{
                            fontSize: 15,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        Asian Art T-shirt Designs
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        color="#bfbfc0"
                        sx={{
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        около 10 часов назад
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    component="span"
                    color="text.primary"
                    sx={{
                        marginBottom: "4px",
                        fontSize: 15,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                    }}
                >
                    {`Пользователь {username} оставил(а) комментарий`}
                </Typography>
            </Box>
            <Spacer />
            <Box sx={{ height: "100%" }}>
                <Tooltip title="Прочитать" disableInteractive placement="left">
                    <IconButton
                        sx={{
                            color: "text.primary",
                        }}
                    >
                        <CloseIcon sx={{ fontSize: "18px" }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </NotificationBox>
    );
};
