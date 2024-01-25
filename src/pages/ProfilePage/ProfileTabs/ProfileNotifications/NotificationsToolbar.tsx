import { FC } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { ProfileSelect } from "../../components/ProfileSelect";
import { useReadAllNotificationsMutation } from "./store/profileNotificationsApi";

interface NotificationsToolbarProps {
    selectItems: {
        params: string[];
        icons: JSX.Element[];
        labels: string[];
    };
}

export const NotificationsToolbar: FC<NotificationsToolbarProps> = ({
    selectItems,
}) => {
    const [readAllNotifications] = useReadAllNotificationsMutation();

    const handleReadAllNotifications = async () => {
        await readAllNotifications();
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "15px",
            }}
        >
            <ProfileSelect selectItems={selectItems} />
            <Box
                sx={{
                    borderRadius: "4px",
                }}
            >
                <Tooltip title="Настройки" disableInteractive>
                    <IconButton
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
                    </IconButton>
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
        </Box>
    );
};
