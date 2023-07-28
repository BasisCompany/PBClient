import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

export const contentTabsItems = [
    {
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
