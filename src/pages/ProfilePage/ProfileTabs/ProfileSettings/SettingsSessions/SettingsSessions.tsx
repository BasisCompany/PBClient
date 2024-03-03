import { Box, ButtonBase, Skeleton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SessionDevice } from "./SessionDevice";
import { useAuth } from "@/shared/hooks/useAuth";
import { useGetUserDevicesQuery } from "@/entities/user";
import { FlexBox } from "@/shared/ui/FlexBox";

export const SettingsSessions = () => {
    const { deviceId } = useAuth();
    const { data, isLoading } = useGetUserDevicesQuery();

    const currentDevice = data?.find((el) => el.id === deviceId);

    return isLoading ? (
        <Skeleton />
    ) : (
        <>
            <Box>
                <Typography variant="text" fontSize={20}>
                    Текущее устройство
                </Typography>
                <SessionDevice device={currentDevice!} isCurrent />
            </Box>
            <ButtonBase
                sx={{
                    mt: 2,
                    mb: 2,
                    p: 1.5,
                    width: "100%",
                    borderRadius: "15px",
                    justifyContent: "flex-start",
                    bgcolor: (theme) => theme.palette.bgcolor.tertiary.main,
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
                    <LogoutIcon sx={{ color: "rgba(233,30,99,1)", ml: 0.5 }} />
                </FlexBox>
                <Typography
                    fontSize={18}
                    fontWeight={400}
                    color="rgba(233,30,99,1)"
                    lineHeight={{ xs: 1, sm: 2 }}
                >
                    Выйти на всех устройствах, кроме этого
                </Typography>
            </ButtonBase>
            <Box>
                <Typography variant="text" fontSize={20}>
                    Активные сеансы
                </Typography>
                {data
                    ?.filter((el) => el.id !== deviceId)
                    .map((device) => (
                        <SessionDevice key={device.id} device={device} />
                    ))}
            </Box>
        </>
    );
};
