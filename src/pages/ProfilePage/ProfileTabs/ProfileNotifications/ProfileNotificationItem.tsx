import {
    Box,
    BoxProps,
    IconButton,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Spacer } from "../../../../UI/Spacer";

const NotificationBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginBottom: "8px",
    minHeight: "90px",
    borderRadius: "5px",
    transition: "all 0.1s ease-in",
    backgroundColor: theme.palette.bgcolor.secondary.main, // Math.random() > 0.5 ? theme.palette.bgcolor.secondary.main : "none",
    "&:hover": {
        backgroundColor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

const NotificationImg = styled((props: BoxProps<"img">) => (
    <Box component="img" {...props} />
))({
    width: 70,
    height: 80,
    borderRadius: "10px",
    objectFit: "cover",
    padding: "5px",
    paddingLeft: "0px",
});

export const ProfileNotificationItem = () => {
    const username = "Stormpero";

    return (
        <NotificationBox>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <NotificationImg
                    src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                    alt="Prompt"
                />
                <Box sx={{ ml: 1 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            component="span"
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontSize: 15,
                                fontWeight: 700,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                mr: "8px",
                            }}
                        >
                            Asian Art T-shirt Designs
                        </Typography>
                        <Typography
                            variant="h6"
                            component="span"
                            color="#bfbfc0"
                            sx={{
                                fontSize: 15,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                fontWeight: 400,
                            }}
                        >
                            около 10 часов назад
                        </Typography>
                    </Box>
                    <Typography
                        component="span"
                        color="text.primary"
                        sx={{
                            fontSize: 14,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontWeight: 400,
                        }}
                    >
                        Пользователь{" "}
                        <Typography
                            component="span"
                            sx={{
                                fontSize: 14,
                                fontWeight: 600,
                                textDecoration: "none",
                                color: "text.primary",
                                cursor: "pointer",
                                transition: "all 0.1s ease-in",
                                ":hover": {
                                    color: "rgba(153, 51, 255, 0.8)",
                                    transition: "all 0.1s ease-out",
                                },
                            }}
                        >
                            {username}
                        </Typography>{" "}
                        оставил(а) комментарий
                    </Typography>
                </Box>
            </Box>
            <Spacer />
            <Box>
                <Tooltip title="Прочитать" disableInteractive placement="left">
                    <IconButton
                        sx={{
                            color: "text.primary",
                        }}
                    >
                        <CloseIcon sx={{ fontSize: "21px" }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </NotificationBox>
    );
};
