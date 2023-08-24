import { Box, IconButton, Tooltip } from "@mui/material";
import { PagePagination } from "../../../../UI/PagePagination";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { ProfileNotificationItem } from "./ProfileNotificationItem";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { ProfileSelect } from "../../components/ProfileSelect";

const notificationsSelectItems = {
    params: ["unread", "read", "all"],
    icons: [
        <DoneRoundedIcon sx={{ fontSize: "19px" }} />,
        <DoneAllRoundedIcon sx={{ fontSize: "19px" }} />,
        <SortRoundedIcon sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Непрочитанные", "Прочитанные", "Все уведомления"],
};

export const ProfileNotifications = () => {
    const isMobile = useMobileDevice();
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ProfileSelect selectItems={notificationsSelectItems} />
                <Box
                    sx={{
                        //backgroundColor: "primary.main",
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
            <Box>
                {new Array(10).fill(null).map((_, i) => (
                    <ProfileNotificationItem key={i} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "end",
                    mt: 2,
                }}
            >
                <PagePagination
                    siblingCount={isMobile ? 0 : 2}
                    size={isMobile ? "small" : "medium"}
                />
            </Box>
        </>
    );
};
