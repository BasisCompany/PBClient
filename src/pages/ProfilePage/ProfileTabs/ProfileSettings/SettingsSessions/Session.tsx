import { FC } from "react";
import { Box, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import { Device } from "@/entities/user";
import { formatTimeDistanceToNow } from "@/shared/utils/timeFormatter";
import { FlexBox } from "@/shared/ui/FlexBox";

interface DeviceProps {
    device: Device;
    isCurrent?: boolean;
}

const deviceMap = {
    desktop: <ComputerIcon />,
    smartphone: <SmartphoneIcon />,
    tablet: <TabletAndroidIcon />,
};

export const Session: FC<DeviceProps> = ({ device, isCurrent = false }) => {
    return (
        <FlexBox
            alignItems="center"
            sx={{
                mt: 1,
                p: 1.5,
                borderRadius: "15px",
                border: (theme) =>
                    `2px solid ${theme.palette.bgcolor.tertiary.main}`,
            }}
        >
            <FlexBox
                justifyContent="center"
                alignItems="center"
                sx={{
                    borderRadius: "50%",
                    bgcolor: (theme) => theme.palette.bgcolor.tertiary.main,
                    minWidth: "40px",
                    height: "40px",
                    mr: 1.5,
                }}
            >
                {deviceMap[device?.device]}
            </FlexBox>
            <Box width="100%">
                <FlexBox justifyContent="space-between">
                    <Box>
                        <Typography
                            variant="text"
                            fontSize={15}
                            letterSpacing="0.4px"
                        >
                            {device?.platform ?? "Неизвестно"} -{" "}
                            {device?.client ?? "Неизвестно"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="text"
                            color={(theme) => theme.palette.text.secondary}
                            fontSize={14}
                            whiteSpace="nowrap"
                        >
                            {isCurrent ? (
                                <Typography
                                    component="span"
                                    color="rgba(76, 175, 80, 1)"
                                    fontSize={14}
                                >
                                    Активный
                                </Typography>
                            ) : (
                                formatTimeDistanceToNow(device?.lastLogin)
                            )}
                        </Typography>
                    </Box>
                </FlexBox>
                <Box>
                    <Typography
                        variant="text"
                        color={(theme) => theme.palette.text.secondary}
                        fontSize={14}
                    >
                        {device?.city} - {device?.ip}
                    </Typography>
                </Box>
            </Box>
        </FlexBox>
    );
};
