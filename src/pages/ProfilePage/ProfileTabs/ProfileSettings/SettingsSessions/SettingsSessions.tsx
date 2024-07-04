import { alpha, Box, ButtonBase, Skeleton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Session } from "./Session";
import { useAuth } from "@/shared/hooks/useAuth";
import {
    useDeleteUserSessionsExceptMutation,
    useGetUserSessionsQuery,
} from "@/entities/user";
import { FlexBox } from "@/shared/ui/FlexBox";
import { toaster } from "@/app/providers/Toast";
import { pbColors } from "@/app/providers/Theme";

export const SettingsSessions = () => {
    const { deviceId } = useAuth();
    const { data, isLoading } = useGetUserSessionsQuery();

    const [deleteUserSessionsExcept] = useDeleteUserSessionsExceptMutation();

    const deleteUserSessions = async () => {
        try {
            await deleteUserSessionsExcept(deviceId!);
            toaster.success("Вы вышли на всех устройствах");
        } catch (error) {
            /* empty */
        }
    };

    const currentSession = data?.find((el) => el.id === deviceId);
    const otherSessions = data?.filter((el) => el.id !== deviceId) ?? [];
    const isOtherSessions = otherSessions.length > 0;

    return isLoading ? (
        <Skeleton />
    ) : (
        <>
            <Box>
                <Typography variant="text" fontSize={20}>
                    Текущее устройство
                </Typography>
                <Session device={currentSession!} isCurrent />
            </Box>
            {isOtherSessions && (
                <>
                    <ButtonBase
                        onClick={deleteUserSessions}
                        sx={{
                            mt: 2,
                            mb: 2,
                            p: 1.5,
                            width: "100%",
                            borderRadius: "15px",
                            justifyContent: "flex-start",
                            bgcolor: (theme) =>
                                theme.palette.bgcolor.tertiary.main,
                            "&:hover": {
                                bgcolor: (theme) =>
                                    theme.palette.bgcolor.tertiary.hover,
                            },
                        }}
                    >
                        <FlexBox
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                minWidth: "40px",
                                height: "40px",
                                mr: 1.5,
                            }}
                        >
                            <LogoutIcon
                                sx={{ color: alpha(pbColors.red, 1), ml: 0.5 }}
                            />
                        </FlexBox>
                        <Typography
                            fontSize={18}
                            fontWeight={400}
                            color={alpha(pbColors.red, 1)}
                            lineHeight={{ xs: 1, sm: 2 }}
                        >
                            Выйти на всех устройствах, кроме этого
                        </Typography>
                    </ButtonBase>
                    <Box>
                        <Typography variant="text" fontSize={20}>
                            Активные сессии
                        </Typography>

                        {otherSessions.map((device) => (
                            <Session key={device.id} device={device} />
                        ))}
                    </Box>
                </>
            )}
        </>
    );
};
