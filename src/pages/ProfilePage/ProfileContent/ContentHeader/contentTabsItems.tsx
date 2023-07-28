import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

export const contentTabsItems = [
    {
        id: 0,
        to: "",
        icon: (
            <IntegrationInstructionsRoundedIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Промты",
    },
    {
        id: 1,
        to: "settings",
        icon: (
            <SettingsRoundedIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Настройки",
    },
    {
        id: 2,
        to: "statistics",
        icon: (
            <DataUsageRoundedIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Статистика",
    },
    {
        id: 3,
        to: "statistics",
        icon: (
            <PersonAddRoundedIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Друзья",
    },
    {
        id: 4,
        to: "comments",
        icon: (
            <ChatBubbleRoundedIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Комментарии",
    },
];
