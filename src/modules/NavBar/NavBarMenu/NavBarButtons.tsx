import { Tooltip, IconButton, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
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

    const { togglePopper, closePopper } = usePopper();

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
                        <LinkIconButton
                            to="favorites"
                            size="large"
                            color="inherit"
                            onClick={closePopper}
                        >
                            <FavoriteIcon />
                        </LinkIconButton>
                    </Tooltip>
                    <Tooltip title="Корзина" disableInteractive>
                        <LinkIconButton
                            to="cart"
                            size="large"
                            color="inherit"
                            onClick={closePopper}
                        >
                            <Badge badgeContent={cartCount} color="secondary">
                                <ShoppingCartRoundedIcon />
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
