import { FC } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import {
    formatTimeDistanceToNow,
    formatTimeFull,
} from "../../../../../utils/timeFormatter";

interface CommentTimestampProps {
    time: string;
}

export const CommentTimestamp: FC<CommentTimestampProps> = ({ time }) => {
    const timeFormatDistanceToNow = formatTimeDistanceToNow(time);
    const fullTime = formatTimeFull(time);
    return (
        <Box sx={{ mt: 1 }}>
            <Tooltip title={fullTime}>
                <Typography
                    variant="h5"
                    component="span"
                    color={(theme) => theme.palette.text.secondary}
                    fontSize={13}
                    fontWeight={500}
                >
                    {timeFormatDistanceToNow}
                </Typography>
            </Tooltip>
        </Box>
    );
};
