import { FC } from "react";
import { Tooltip, Typography } from "@mui/material";
import {
    formatTimeDistanceToNow,
    formatTimeFull,
} from "../../../../../../utils/timeFormatter";
import { useMobileDevice } from "../../../../../../shared/hooks/useMobileDevice";

interface ReplyTimestamp {
    time: string;
}

export const ReplyTimestamp: FC<ReplyTimestamp> = ({ time }) => {
    const isMobile = useMobileDevice();

    const timeFormatDistanceToNow = formatTimeDistanceToNow(time);
    const fullTime = formatTimeFull(time);
    return (
        <Tooltip title={fullTime}>
            <Typography
                variant="text"
                color={(theme) => theme.palette.text.secondary}
                fontSize={13}
                fontWeight={500}
                sx={{ mt: isMobile ? 0.5 : 0 }}
            >
                {timeFormatDistanceToNow}
            </Typography>
        </Tooltip>
    );
};
