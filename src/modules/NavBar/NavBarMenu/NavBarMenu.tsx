import { MouseEvent } from "react";
import { Badge, ClickAwayListener, IconButton, Tooltip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { FlexBox } from "../../../shared/ui/FlexBox";
import { useMobileDevice } from "../../../shared/hooks/useMobileDevice";
import { AccountPopper } from "./Poppers/AccountPopper";
import { NotificationsPopper } from "./Poppers/NotificationsPopper/NotificationsPopper";
import { useNavbarPoppers, NavBarPoppers } from "./useNavbarPoppers";
import { useCountUnreadNotificationsQuery } from "@/entities/notification";
import { useAuth } from "@/shared/hooks/useAuth";
import { Image } from "@/shared/ui/Image";
import DefaultAvatar from "@/assets/DefaultAvatar.webp";

const NavBarMenu = () => {
    const isMobile = useMobileDevice();
    const { popper, closePopper, openPopper, isPopperOpen } =
        useNavbarPoppers();

    const { user } = useAuth();

    const { data } = useCountUnreadNotificationsQuery(undefined, {
        //pollingInterval: 10000, //TODO: delete comment
    });

    const notificationsCount = data?.count ?? null;

    return (
        <ClickAwayListener
            onClickAway={closePopper}
            mouseEvent={popper.current !== null ? "onClick" : false}
        >
            <FlexBox>
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
                        <Tooltip
                            title="Уведомления"
                            disableInteractive
                            onClick={(event: MouseEvent<HTMLElement>) =>
                                openPopper(
                                    NavBarPoppers.Notifications,
                                    event.currentTarget
                                )
                            }
                        >
                            <IconButton size="large" color="inherit">
                                <Badge
                                    badgeContent={notificationsCount}
                                    color="secondary"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        {isPopperOpen(NavBarPoppers.Notifications) && (
                            <NotificationsPopper
                                isOpen={isPopperOpen(
                                    NavBarPoppers.Notifications
                                )}
                                anchorEl={popper.anchor}
                                handleClose={closePopper}
                            />
                        )}
                    </>
                )}
                <Tooltip title="Профиль" disableInteractive>
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={(event: MouseEvent<HTMLElement>) =>
                            openPopper(
                                NavBarPoppers.Account,
                                event.currentTarget
                            )
                        }
                    >
                        <Image
                            src={user?.thumb ?? DefaultAvatar}
                            alt={user?.username}
                            width="40px"
                            height="40px"
                            borderRadius="50%"
                        />
                    </IconButton>
                </Tooltip>
                <AccountPopper
                    isOpen={isPopperOpen(NavBarPoppers.Account)}
                    anchorEl={popper.anchor}
                    onClose={closePopper}
                />
            </FlexBox>
        </ClickAwayListener>
    );
};

export default NavBarMenu;
