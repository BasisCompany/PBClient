import { Tooltip, IconButton, Badge } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { usePopper } from "./ui/NavbarPopper";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { useCountUnreadNotificationsQuery } from "@/entities/notification";
import { Avatar } from "@/shared/ui/Image/Avatar";
import { useAuth } from "@/shared/hooks/useAuth";

export const NavBarButtons = () => {
    const isMobile = useMobileDevice();

    const { user } = useAuth();

    const { togglePopper } = usePopper();

    const { data } = useCountUnreadNotificationsQuery(undefined, {
        //pollingInterval: 10000, //TODO: delete comment
    });

    const notificationsCount = data?.count ?? null;

    return (
        <>
            {!isMobile && (
                <>
                    <Tooltip title="Избранное" disableInteractive>
                        <IconButton size="large" color="inherit">
                            <BookmarkIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Корзина" disableInteractive>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Уведомления" disableInteractive>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={togglePopper("notifications")}
                        >
                            <Badge
                                badgeContent={notificationsCount}
                                color="secondary"
                            >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </>
            )}
            <Tooltip title="Профиль" disableInteractive>
                <IconButton
                    size="small"
                    color="inherit"
                    onClick={togglePopper("account")}
                >
                    <Avatar
                        src={user?.thumb}
                        alt={user?.username}
                        width="40px"
                        height="40px"
                        borderRadius="50%"
                    />
                </IconButton>
            </Tooltip>
        </>
    );
};
