import { FC } from "react";
import { Box, BoxProps, IconButton, Tooltip, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Spacer } from "../../../../../shared/ui/Spacer";
import { Notification } from "../../../../../types/notifications.type";
import { FlexBox } from "../../../../../shared/ui/FlexBox";
import { useReadNotificationMutation } from "../store/profileNotificationsApi";
import { NotificationContent } from "./NotificationContent";

interface NotificationBoxProps extends BoxProps {
    isUnread: boolean;
}

const NotificationBox = styled(
    ({ isUnread: _, ...props }: NotificationBoxProps) => <Box {...props} />
)(({ theme, isUnread }) => ({
    display: "flex",
    marginBottom: "8px",
    minHeight: "90px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.1s ease-in",
    backgroundColor: isUnread ? theme.palette.bgcolor.secondary.main : "none",
    "&:hover": {
        backgroundColor: isUnread
            ? theme.palette.bgcolor.secondary.hover
            : theme.palette.bgcolor.secondary.main,
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

interface ProfileNotificationProps {
    notification: Notification;
}

export const ProfileNotification: FC<ProfileNotificationProps> = ({
    notification,
}) => {
    const [readNotification] = useReadNotificationMutation();

    const handleReadNotification = async () => {
        await readNotification(notification.id);
    };

    const isUnread = !notification.isRead;

    return (
        <NotificationBox isUnread={isUnread}>
            <FlexBox
                sx={{
                    alignItems: "center",
                    padding: "10px",
                    pl: "13px",
                }}
            >
                <NotificationImg
                    src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                    alt="Prompt"
                />
                <NotificationContent notification={notification} />
            </FlexBox>
            <Spacer />
            {isUnread && (
                <Box>
                    <Tooltip
                        title="Прочитать"
                        disableInteractive
                        placement="left"
                    >
                        <IconButton
                            onClick={handleReadNotification}
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
