import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { formatTimeDistanceToNow } from "../../../../../utils/timeFormatter";
import { Notification } from "../../../../../types/notifications.type";
import { FlexBox } from "../../../../../UI/FlexBox";

interface NotificationMessageProps {
    notification: Notification;
}

export const NotificationMessage: FC<NotificationMessageProps> = ({
    notification,
}) => {
    const promptName = "Asian Art T-shirt Designs";

    return (
        <Box sx={{ ml: 1 }}>
            <FlexBox
                sx={{
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
                            color: (theme) => theme.palette.text.secondary,
                            transition: "all .1s ease-out",
                        },
                    }}
                >
                    {promptName}
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
                    {formatTimeDistanceToNow(notification.createdAt)}
                </Typography>
            </FlexBox>
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
                            color: (theme) => theme.palette.text.secondary,
                            transition: "all .1s ease-out",
                        },
                    }}
                >
                    {notification.senderUser.username}
                </Typography>{" "}
                оставил(а) комментарий: &quot;Круто&quot;
            </Typography>
        </Box>
    );
};
