import { Box, Tooltip, Typography } from "@mui/material";
import { ReactNode, forwardRef, useEffect, useRef } from "react";
import { useParams } from "react-router";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { SettingsSite } from "./SettingsSite";
import { SettingsNotifications } from "./SettingsNotifications";
import { SettingsProfile } from "./SettingsProfile";
import { SettingsSessions } from "./SettingsSessions/SettingsSessions";
import { SettingsChangePassword } from "./SettingsChangePassword/SettingsChangePassword";
import { FlexBox } from "@/shared/ui/FlexBox";
import { SecondaryBox } from "@/shared/ui/Box/SecondaryBox";

interface SettingsBoxProps {
    title: string;
    tooltip?: string;
    children: ReactNode;
}

const tooltipSessionText =
    "Сессии - это устройства, которые вы используете или которые использовали вашу учетную запись. Здесь показаны активные сессии в данный момент. Вы можете завершить все сессии разом, кроме текущей.";

const SettingsBox = forwardRef<HTMLDivElement, SettingsBoxProps>(
    ({ title, tooltip, children }, forwardedRef) => {
        return (
            <SecondaryBox
                ref={forwardedRef}
                sx={{
                    p: 3,
                    pb: 5,
                    mb: 2,
                }}
            >
                <FlexBox alignItems="center" mb={2}>
                    <Typography
                        variant="title"
                        fontWeight={500}
                        fontSize={{ xs: 19, sm: 24, lg: 26 }}
                    >
                        {title}
                    </Typography>
                    {tooltip && (
                        <Tooltip title={tooltip} sx={{ ml: 0.5 }}>
                            <HelpOutlineIcon />
                        </Tooltip>
                    )}
                </FlexBox>

                <FlexBox justifyContent="center">
                    <Box width="500px">{children}</Box>
                </FlexBox>
            </SecondaryBox>
        );
    }
);

export const ProfileSettings = () => {
    const params = useParams();

    const blocksRef = useRef<Record<string, HTMLDivElement | null>>({
        profile: null,
        site: null,
        notifications: null,
        changePassword: null,
        sessions: null,
    });

    useEffect(() => {
        const scrollToBlock = (block = "") => {
            if (block in blocksRef.current) {
                const currentBlock = blocksRef.current[block];
                if (currentBlock) {
                    currentBlock.scrollIntoView({
                        behavior: "instant",
                        block: "center",
                    });
                }
            }
        };

        scrollToBlock(params.block);
    }, [params]);

    return (
        <>
            <SettingsBox
                title="Профиль"
                ref={(node) => (blocksRef.current.profile = node)}
            >
                <SettingsProfile />
            </SettingsBox>
            <SettingsBox
                title="Настройки сайта"
                ref={(node) => (blocksRef.current.site = node)}
            >
                <SettingsSite />
            </SettingsBox>
            <SettingsBox
                title="Уведомления"
                ref={(node) => (blocksRef.current.notifications = node)}
            >
                <SettingsNotifications />
            </SettingsBox>
            <SettingsBox
                title="Смена пароля"
                ref={(node) => (blocksRef.current.changePassword = node)}
            >
                <SettingsChangePassword />
            </SettingsBox>
            <SettingsBox
                title="Активные сессии"
                tooltip={tooltipSessionText}
                ref={(node) => (blocksRef.current.sessions = node)}
            >
                <SettingsSessions />
            </SettingsBox>
        </>
    );
};
