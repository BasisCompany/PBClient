import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
// import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

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
    // {
    //     id: 2,
    //     to: "statistics",
    //     icon: (
    //         <DataUsageRoundedIcon
    //             sx={{
    //                 fontSize: 25,
    //             }}
    //         />
    //     ),
    //     iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
    //     label: "Статистика",
    // },
    {
        id: 1,
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
    {
        id: 2,
        to: "notifications",
        icon: (
            <NotificationsIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Уведомления",
    },
    {
        id: 3,
        to: "payments",
        icon: (
            <AccountBalanceWalletIcon
                sx={{
                    fontSize: 25,
                }}
            />
        ),
        iconPosition: "start" as "start" | "end" | "bottom" | "top" | undefined,
        label: "Платежи",
    },
    {
        id: 4,
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
];
