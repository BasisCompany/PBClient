import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { SettingsSite } from "./SettingsSite";
import { SettingsNotifications } from "./SettingsNotifications";
import { SettingsProfile } from "./SettingsProfile";
import { SettingsSessions } from "./SettingsSessions/SettingsSessions";
import { SettingsChangePassword } from "./SettingsChangePassword/SettingsChangePassword";
import { FlexBox } from "@/shared/ui/FlexBox";

const SettingsBox: FC<{ title: string; children: ReactNode }> = ({
    title,
    children,
}) => {
    return (
        <Box
            bgcolor={(theme) => theme.palette.bgcolor.secondary.main}
            sx={{
                borderRadius: "15px",
                p: 3,
                pb: 5,
                mb: 2,
            }}
        >
            <Typography
                variant="title"
                fontWeight={500}
                fontSize={{ xs: 19, sm: 24, lg: 26 }}
                mb={2}
            >
                {title}
            </Typography>
            <FlexBox justifyContent="center">
                <Box width="500px">{children}</Box>
            </FlexBox>
        </Box>
    );
};

export const ProfileSettings = () => {
    return (
        <>
            <SettingsBox title="Профиль">
                <SettingsProfile />
            </SettingsBox>
            <SettingsBox title="Настройки сайта">
                <SettingsSite />
            </SettingsBox>
            <SettingsBox title="Уведомления">
                <SettingsNotifications />
            </SettingsBox>
            <SettingsBox title="Смена пароля">
                <SettingsChangePassword />
            </SettingsBox>
            <SettingsBox title="Активные сеансы">
                <SettingsSessions />
            </SettingsBox>
        </>
    );
};
