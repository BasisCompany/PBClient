import { Box, Typography, styled } from "@mui/material";
import { useGetUserDevicesQuery } from "../../store/profileSettingsApi";
import { useAuth } from "../../../../../../hooks/useAuth";
import { SecureDevice } from "./SecureDevice";

const DeviceBox = styled(Box)(({ theme }) => ({
    borderRadius: "8px",
    background: theme.palette.bgcolor.secondary.main,
    maxWidth: "500px",
    padding: "16px",
}));

export const SecureDevices = () => {
    const { deviceId } = useAuth();
    const { data, isLoading } = useGetUserDevicesQuery();

    const currentDevice = data?.find((el) => el.id === deviceId);

    return isLoading ? (
        <></>
    ) : (
        <Box sx={{ mt: 2 }}>
            <Typography
                variant="h6"
                color={(theme) => theme.palette.text.primary}
                fontWeight={400}
            >
                Мои устройства
            </Typography>
            <DeviceBox>
                <Typography
                    fontSize={20}
                    color={(theme) => theme.palette.text.primary}
                    fontWeight={400}
                >
                    Текущий сеанс
                </Typography>
                <SecureDevice device={currentDevice} isCurrent />
            </DeviceBox>
            <DeviceBox
                sx={{
                    mt: 2,
                    mb: 2,
                    height: "50px",
                    p: 1,
                    pl: 2,
                }}
            >
                <Typography
                    fontSize={20}
                    color={(theme) => theme.palette.text.primary}
                    fontWeight={400}
                >
                    Выйти на всех устройствах, кроме этого
                </Typography>
            </DeviceBox>
            <DeviceBox>
                <Typography
                    fontSize={20}
                    color={(theme) => theme.palette.text.primary}
                    fontWeight={400}
                >
                    Другие сеансы
                </Typography>
                {data
                    ?.filter((el) => el.id !== deviceId)
                    .map((device) => (
                        <SecureDevice key={device.id} device={device} />
                    ))}
            </DeviceBox>
        </Box>
    );
};
