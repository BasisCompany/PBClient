import { Box, Tooltip, IconButton } from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { ProfileSelect } from "../../components/ProfileSelect";
import { useReadAllNotificationsMutation } from "@/entities/notification";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useUserId } from "@/shared/hooks";
import { LinkIconButton } from "@/shared/ui/Links";

const notificationsSelectItems = {
    params: ["unread", "read", "all"],
    icons: [
        <DoneRoundedIcon key="unread" sx={{ fontSize: "19px" }} />,
        <DoneAllRoundedIcon key="read" sx={{ fontSize: "19px" }} />,
        <SortRoundedIcon key="all" sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Непрочитанные", "Прочитанные", "Все уведомления"],
};

export const NotificationsToolbar = () => {
    const userId = useUserId();

    const [readAllNotifications] = useReadAllNotificationsMutation();

    const handleReadAllNotifications = async () => {
        await readAllNotifications();
    };

    return (
        <FlexBox
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: "15px",
            }}
        >
            <ProfileSelect selectItems={notificationsSelectItems} />
            <Box borderRadius="4px">
                <Tooltip title="Настройки" disableInteractive>
                    <LinkIconButton
                        to={`/user/${userId}/settings/notifications`}
                        sx={{
                            height: "33px",
                            width: "33px",
                            borderRadius: "4px",
                            ":hover": {
                                backgroundColor: "rgba(153, 51, 255,0.2)",
                            },
                        }}
                    >
                        <SettingsRoundedIcon sx={{ width: "23px" }} />
                    </LinkIconButton>
                </Tooltip>
                <Tooltip title="Прочитать всё" disableInteractive>
                    <IconButton
                        onClick={handleReadAllNotifications}
                        sx={{
                            height: "33px",
                            width: "33px",
                            borderRadius: "4px",
                            ":hover": {
                                backgroundColor: "rgba(153, 51, 255, 0.2);",
                            },
                        }}
                    >
                        <DoneAllIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </FlexBox>
    );
};
