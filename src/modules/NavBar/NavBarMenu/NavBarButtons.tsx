import { Tooltip, IconButton, Badge } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { usePopper } from "./ui/NavbarPopper";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { useCountUnreadNotificationsQuery } from "@/entities/notification";
import { Avatar } from "@/shared/ui/Image/Avatar";
import { useAuth } from "@/shared/hooks/useAuth";
import { LinkIconButton } from "@/shared/ui/Links";
import { useCountCartQuery } from "@/entities/cart";

export const NavBarButtons = () => {
    const isMobile = useMobileDevice();

    const { user } = useAuth();

    const { togglePopper } = usePopper();

    const { data: notification } = useCountUnreadNotificationsQuery(undefined, {
        //pollingInterval: 10000, //TODO: delete comment
    });

    const { data: cart } = useCountCartQuery();

    const notificationsCount = notification?.count ?? null;
    const cartCount = cart?.count ?? null;

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
                        <LinkIconButton size="large" color="inherit" to="cart">
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </LinkIconButton>
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
