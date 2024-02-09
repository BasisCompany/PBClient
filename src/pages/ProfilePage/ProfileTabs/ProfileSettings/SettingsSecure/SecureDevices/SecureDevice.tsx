import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Device } from "../../../../../../types/settings.type";
import { formatTimeDistanceToNow } from "../../../../../../utils/timeFormatter";

interface DeviceProps {
    device: Device;
    isCurrent?: boolean;
}

export const SecureDevice: FC<DeviceProps> = ({
    device,
    isCurrent = false,
}) => {
    return (
        <Box sx={{ ml: 2 }}>
            <Box>
                <Typography
                    variant="h5"
                    component="span"
                    color={(theme) => theme.palette.text.primary}
                    fontSize={15}
                    fontWeight={500}
                    letterSpacing="0.4px"
                >
                    {device.platform ?? "Неизвестно"}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h6"
                    component="span"
                    color={(theme) => theme.palette.text.secondary}
                    fontSize={14}
                    fontWeight={400}
                >
                    {device.client ?? "Неизвестно"}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h6"
                    component="span"
                    color={(theme) => theme.palette.text.secondary}
                    fontSize={14}
                    fontWeight={400}
                >
                    {device.city} - {device.ip}
                    {!isCurrent &&
                        `- ${formatTimeDistanceToNow(device.lastLogin)}`}
                </Typography>
            </Box>
        </Box>
    );
};
