import { Box, Typography } from "@mui/material";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { FlexBox } from "@/shared/ui/FlexBox";

export const NotificationEmpty = () => {
    return (
        <FlexBox
            sx={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "250px",
            }}
        >
            <Box textAlign="center">
                <NotificationsOffIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography fontSize={18}>Нет новых уведомлений</Typography>
            </Box>
        </FlexBox>
    );
};
