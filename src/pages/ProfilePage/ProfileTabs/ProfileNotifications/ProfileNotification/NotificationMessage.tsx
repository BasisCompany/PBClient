import { Typography } from "@mui/material";
import { FC } from "react";
import {
    NotifActivityType,
    Notification,
} from "../../../../../types/notifications.type";

export function getNotificationMessage(notification: Notification) {
    const comment = "Круто"; // TODO: Сделать

    switch (notification.activityType) {
        case NotifActivityType.PROMPT_COMMENT:
            return `оставил(а) комментарий: "${comment}"`;
        case NotifActivityType.FRIEND_REQUEST:
            return "хочет добавить вас в друзья";
        case NotifActivityType.PROMPT_PURCHASE:
            return "купил(а) ваш промпт";
    }
}

interface NotificationMessageProps {
    notification: Notification;
}

export const NotificationMessage: FC<NotificationMessageProps> = ({
    notification,
}) => {
    const message = getNotificationMessage(notification);

    return (
        <Typography
            variant="text"
            color={(theme) => theme.palette.text.primary}
            fontSize={14}
            fontWeight={400}
            sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
            }}
        >
            id:{notification.id} Пользователь{" "}
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
            {message}
        </Typography>
    );
};
