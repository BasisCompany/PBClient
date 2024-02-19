import { FC, useState } from "react";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Spacer } from "../../../../../shared/ui/Spacer";
import { formatTimeDistanceToNow } from "../../../../../utils/timeFormatter";
import { Notification } from "../../../../../types/notifications.type";
import { NotificationMessage } from "../../../../../pages/ProfilePage/ProfileTabs/ProfileNotifications/ProfileNotification/NotificationMessage";
import { FlexBox } from "../../../../../shared/ui/FlexBox";
import { useReadNotificationMutation } from "../../../../../pages/ProfilePage/ProfileTabs/ProfileNotifications/store/profileNotificationsApi";

interface NavbarNotificationProps {
    notification: Notification;
}

export const NavbarNotification: FC<NavbarNotificationProps> = ({
    notification,
}) => {
    const [showCheckArrows, setShowCheckArrows] = useState(false);

    const handleMouseOver = () => {
        setShowCheckArrows(true);
    };

    const handleMouseOut = () => {
        setShowCheckArrows(false);
    };

    const [readNotification] = useReadNotificationMutation();

    const handleReadNotification = async () => {
        await readNotification(notification.id);
    };

    const promptName = "Asian Art T-shirt Designs";
    return (
        <>
            <FlexBox
                sx={{
                    alignItems: "center",
                    p: 1,
                    backgroundColor: (theme) =>
                        theme.palette.bgcolor.modal.primary.main,
                    transition: "all 0.1s ease-in",
                    ":hover": {
                        backgroundColor: (theme) =>
                            theme.palette.bgcolor.modal.primary.hover,
                        transition: "all 0.1s ease-out",
                    },
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {/*//TODO: Ссылка на карточку  */}
                <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                    variant="square"
                />
                <Box sx={{ ml: 1 }}>
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
                        {promptName}{" "}
                        <Typography
                            variant="h6"
                            component="span"
                            color="#bfbfc0"
                            sx={{
                                marginBottom: "4px",
                                fontSize: 14,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            {formatTimeDistanceToNow(notification.createdAt)}
                        </Typography>
                    </Typography>
                    <NotificationMessage notification={notification} />
                </Box>
                <Spacer />
                {showCheckArrows && (
                    <IconButton
                        sx={{ color: (theme) => theme.palette.text.primary }}
                        onClick={handleReadNotification}
                    >
                        <DoneIcon />
                    </IconButton>
                )}
            </FlexBox>
            <Divider />
        </>
    );
};
