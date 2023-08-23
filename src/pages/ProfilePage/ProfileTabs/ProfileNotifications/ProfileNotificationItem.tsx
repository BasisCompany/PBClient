import {
    Box,
    BoxProps,
    IconButton,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
import { Spacer } from "../../../../UI/Spacer";
import CheckIcon from "@mui/icons-material/Check";

const NotificationBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginBottom: "8px",
    minHeight: "90px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.1s ease-in",
    "&:hover": {
        backgroundColor: theme.palette.bgcolor.secondary.hover,
        transition: "all 0.1s ease-out",
    },
}));

const NotificationImg = styled((props: BoxProps<"img">) => (
    <Box component="img" {...props} />
))({
    width: 60,
    height: 80,
    borderRadius: "5px",
    objectFit: "cover",
    marginRight: "5px",
});

export const ProfileNotificationItem = () => {
    const username = "Stormpero";
    const ran = Math.random();
    return (
        <NotificationBox
            sx={{
                backgroundColor:
                    ran > 0.5
                        ? (theme) => theme.palette.bgcolor.secondary.main
                        : "none",
                "&:hover": {
                    backgroundColor:
                        ran > 0.5
                            ? (theme) => theme.palette.bgcolor.secondary.hover
                            : (theme) => theme.palette.bgcolor.secondary.main,
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    pl: "13px",
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
                            color={(theme) => theme.palette.text.primary}
                            fontSize={15}
                            fontWeight={700}
                            sx={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                mr: "8px",
                                cursor: "pointer",
                                transition: "all .1s ease-in",
                                ":hover": {
                                    color: (theme) =>
                                        theme.palette.text.secondary,
                                    transition: "all .1s ease-out",
                                },
                            }}
                        >
                            Asian Art T-shirt Designs
                        </Typography>
                        <Typography
                            variant="h6"
                            component="span"
                            color={(theme) => theme.palette.text.secondary}
                            fontSize={15}
                            fontWeight={400}
                            sx={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            около 10 часов назад
                        </Typography>
                    </Box>
                    <Typography
                        component="span"
                        color={(theme) => theme.palette.text.primary}
                        fontSize={14}
                        fontWeight={400}
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        Пользователь{" "}
                        <Typography
                            component="span"
                            color={(theme) => theme.palette.text.primary}
                            fontSize={14}
                            fontWeight={600}
                            sx={{
                                textDecoration: "none",
                                cursor: "pointer",
                                transition: "all .1s ease-in",
                                ":hover": {
                                    color: (theme) =>
                                        theme.palette.text.secondary,
                                    transition: "all .1s ease-out",
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
            {ran > 0.5 && (
                <Box>
                    <Tooltip
                        title="Прочитать"
                        disableInteractive
                        placement="left"
                    >
                        <IconButton
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            <CheckIcon sx={{ fontSize: "21px" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            )}
        </NotificationBox>
    );
};
