import {
    Badge,
    Box,
    Divider,
    IconButton,
    Popper,
    Skeleton,
    Typography,
    styled,
} from "@mui/material";
import { FC } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { LinkButton } from "../../../../../shared/ui/Links/LinkButton";
import { LinkIconButton } from "../../../../../shared/ui/Links/LinkIconButton";
import {
    useGetNotificationsQuery,
    useReadAllNotificationsMutation,
} from "../../../../../pages/ProfilePage/ProfileTabs/ProfileNotifications/store/profileNotificationsApi";
import { CommentsEmpty } from "../../../../../pages/ProfilePage/ProfileTabs/ProfileComments/CommentsEmpty";
import { FlexBox } from "../../../../../shared/ui/FlexBox";
import { NavbarNotification } from "./NavbarNotification";

interface NotificationsPopperProps {
    isOpen: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const NotificationsBox = styled(Box)(({ theme }) => ({
    maxHeight: "300px",
    minHeight: "80px",
    overflow: "auto",
    ...theme.scrollbar,
}));

export const NotificationsPopper: FC<NotificationsPopperProps> = ({
    isOpen,
    anchorEl,
    handleClose,
}) => {
    const { data, isLoading } = useGetNotificationsQuery({
        sort: "unread",
        page: 1,
        take: 11,
    });

    const [readAllNotifications] = useReadAllNotificationsMutation();

    const notifications = data?.data ?? [];
    const totalNotifications = data?.meta.totalItems;
    const hasNotifications = notifications.length > 0;

    return (
        <Popper
            id="notifications-popover"
            open={isOpen}
            anchorEl={anchorEl}
            placement="bottom-end"
            sx={{
                zIndex: 1250,
                backgroundColor: (theme) =>
                    theme.palette.bgcolor.modal.primary.main,
                borderRadius: "5px",
            }}
            modifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
            ]}
        >
            <Box sx={{ width: "500px" }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        p: 1,
                    }}
                >
                    <LinkIconButton
                        to="profile/notifications"
                        onClick={handleClose}
                    >
                        <SettingsRoundedIcon />
                    </LinkIconButton>
                    <LinkButton
                        to="profile/notifications"
                        variant="text"
                        onClick={handleClose}
                    >
                        <Typography
                            sx={{
                                color: "text.primary",
                                textTransform: "none",
                            }}
                        >
                            Уведомления
                        </Typography>
                        <Badge
                            sx={{
                                ml: 2,
                            }}
                            badgeContent={totalNotifications}
                            max={10}
                            color="secondary"
                        />
                    </LinkButton>
                    <IconButton onClick={readAllNotifications}>
                        <DoneAllIcon />
                    </IconButton>
                </Box>
                <Divider />
                <NotificationsBox>
                    {!isLoading ? (
                        hasNotifications ? (
                            notifications.map((notification) => (
                                <NavbarNotification
                                    key={notification.id}
                                    notification={notification}
                                />
                            ))
                        ) : (
                            <CommentsEmpty />
                        )
                    ) : (
                        <NavbarNotificationSkeleton />
                    )}
                </NotificationsBox>
            </Box>
        </Popper>
    );
};

const NavbarNotificationSkeleton = () => (
    <FlexBox sx={{ p: 1 }}>
        <Skeleton
            variant="rounded"
            height={40}
            width={40}
            sx={{ mr: 1, mt: 0.5 }}
        />
        <Box sx={{ width: "100%" }}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Box>
    </FlexBox>
);
