import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { formatTimeDistanceToNow } from "../../../../../utils/timeFormatter";
import { Notification } from "../../../../../types/notifications.type";
import { FlexBox } from "../../../../../shared/ui/FlexBox";
import { NotificationMessage } from "./NotificationMessage";

interface NotificationContentProps {
    notification: Notification;
}

export const NotificationContent: FC<NotificationContentProps> = ({
    notification,
}) => {
    const promptName = "Asian Art T-shirt Designs";

    return (
        <Box sx={{ ml: 1 }}>
            <FlexBox sx={{ flexWrap: "wrap", alignItems: "center" }}>
                <Typography
                    component="span"
                    variant="h6"
                    color={(theme) => theme.palette.text.primary}
                    fontSize={15}
                    fontWeight={700}
                    sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        mr: "8px",
                        cursor: "pointer",
                        transition: "all .1s ease-in",
                        ":hover": {
                            color: (theme) => theme.palette.text.secondary,
                            transition: "all .1s ease-out",
                        },
                    }}
                >
                    {promptName}
                </Typography>
                <Typography
                    variant="h6"
                    component="span"
                    color={(theme) => theme.palette.text.secondary}
                    fontSize={15}
                    fontWeight={400}
                    sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                    }}
                >
                    {formatTimeDistanceToNow(notification.createdAt)}
                </Typography>
            </FlexBox>
            <NotificationMessage notification={notification} />
        </Box>
    );
};
