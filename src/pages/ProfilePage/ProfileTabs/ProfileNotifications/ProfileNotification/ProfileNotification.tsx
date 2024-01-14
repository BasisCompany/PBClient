import { Box, BoxProps, IconButton, Tooltip, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { FC } from "react";
import { Spacer } from "../../../../../UI/Spacer";
import { Notification } from "../../../../../types/notifications.type";
import { FlexBox } from "../../../../../UI/FlexBox";
import { NotificationMessage } from "./NotificationMessage";

interface NotificationBoxProps extends BoxProps {
    isUnread: boolean;
}

const NotificationBox = styled(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                <NotificationMessage notification={notification} />
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
