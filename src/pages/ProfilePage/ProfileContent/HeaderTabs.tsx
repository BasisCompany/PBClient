import { SyntheticEvent, useEffect, useState } from "react";
import { Badge, Box } from "@mui/material";
import { useLocation } from "react-router";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import IntegratInstRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { CustomTabs, CustomTab } from "../../../UI/Tabs";

const profileTabs = ["", "comments", "notifications", "payments", "settings"];

const getPathId = (path: string): number => {
    const lastUrlSegment = path.split("/").pop();
    return lastUrlSegment === "profile"
        ? 0
        : profileTabs.findIndex((url) => url === lastUrlSegment) || 0;
};

export const HeaderTabs = () => {
    const location = useLocation();

    const [value, setValue] = useState<number>(getPathId(location.pathname));

    useEffect(() => {
        setValue(getPathId(location.pathname));
    }, [location.pathname]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <CustomTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
            >
                <CustomTab
                    to=""
                    label="Промты"
                    icon={<IntegratInstRoundedIcon sx={{ fontSize: 25 }} />}
                />
                <CustomTab
                    to="comments"
                    label="Комментарии"
                    icon={
                        <Badge
                            badgeContent={100}
                            overlap="circular"
                            color="secondary"
                            max={9}
                        >
                            <ChatBubbleRoundedIcon sx={{ fontSize: 25 }} />
                        </Badge>
                    }
                />

                <CustomTab
                    to="notifications"
                    label="Уведомления"
                    icon={
                        <Badge
                            badgeContent={100}
                            overlap="circular"
                            color="secondary"
                            max={9}
                        >
                            <NotificationsIcon sx={{ fontSize: 25 }} />
                        </Badge>
                    }
                />

                <CustomTab
                    to="payments"
                    label="Платежи"
                    icon={<AccountBalanceWalletIcon sx={{ fontSize: 25 }} />}
                />
                <CustomTab
                    to="settings"
                    label="Настройки"
                    icon={<SettingsRoundedIcon sx={{ fontSize: 25 }} />}
                />
            </CustomTabs>
        </Box>
    );
};
