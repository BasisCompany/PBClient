import { Badge, BadgeProps, styled } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import IntegratInstRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { CustomTabs, CustomTab } from "../../../UI/Tabs";
import { useTabs } from "../../../hooks/useTabs";

const ProfileTabBadge = styled((props: BadgeProps) => (
    <Badge overlap="circular" color="secondary" max={9} {...props} />
))({
    "& .MuiBadge-badge": {
        width: 20,
        height: 20,
        fontSize: 11,
    },
});

const localTabs = ["", "comments", "notifications", "payments", "settings"];

export const LocalTabs = () => {
    const { value, handleChange } = useTabs(localTabs);

    return (
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
                    <ProfileTabBadge badgeContent={100}>
                        <ChatBubbleRoundedIcon sx={{ fontSize: 25 }} />
                    </ProfileTabBadge>
                }
            />
            <CustomTab
                to="notifications"
                label="Уведомления"
                icon={
                    <ProfileTabBadge badgeContent={5}>
                        <NotificationsIcon sx={{ fontSize: 25 }} />
                    </ProfileTabBadge>
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
    );
};
