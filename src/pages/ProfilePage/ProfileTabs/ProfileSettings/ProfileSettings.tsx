import { Box, Typography } from "@mui/material";
import { ReactNode, forwardRef, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { SettingsSite } from "./SettingsSite";
import { SettingsNotifications } from "./SettingsNotifications";
import { SettingsProfile } from "./SettingsProfile";
import { SettingsSessions } from "./SettingsSessions/SettingsSessions";
import { SettingsChangePassword } from "./SettingsChangePassword/SettingsChangePassword";
import { FlexBox } from "@/shared/ui/FlexBox";

interface SettingsBoxProps {
    title: string;
    children: ReactNode;
}

const SettingsBox = forwardRef<HTMLDivElement, SettingsBoxProps>(
    ({ title, children }, forwardedRef) => {
        return (
            <Box
                ref={forwardedRef}
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
                title="Активные сеансы"
                ref={(node) => (blocksRef.current.sessions = node)}
            >
                <SettingsSessions />
            </SettingsBox>
        </>
    );
};
