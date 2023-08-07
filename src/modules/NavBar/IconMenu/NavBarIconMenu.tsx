import { MouseEvent } from "react";
import {
    Avatar,
    Badge,
    ClickAwayListener,
    IconButton,
    Tooltip,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { FlexBox } from "../../../UI/FlexBox";
import { useMobileDevice } from "../../../hooks/useMobileDevice";
import { AccountPopper } from "./Poppers/AccountPopper";
import { NotificationsPopper } from "./Poppers/NotificationsPopper";
import {
    NavPoppers,
    closePopper,
    openAccount,
    openNotifications,
    usePoppers,
} from "./usePoppers";

export const NavBarIconMenu = () => {
    const isMobile = useMobileDevice();
    const { poppers, dispatchPopper, isPopperOpen } = usePoppers();

    const handleClose = () => {
        dispatchPopper(closePopper());
    };

    return (
        <ClickAwayListener
            onClickAway={handleClose}
            mouseEvent={poppers.currPopper !== null ? "onClick" : false}
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
                                dispatchPopper(
                                    openNotifications(event.currentTarget)
                                )
                            }
                        >
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <NotificationsPopper
                            isOpen={isPopperOpen(NavPoppers.notifications)}
                            anchorEl={poppers.anchorPopper}
                        />
                    </>
                )}
                <Tooltip title="Профиль" disableInteractive>
                    <IconButton
                        size="small"
                        color="inherit"
                        onClick={(event: MouseEvent<HTMLElement>) =>
                            dispatchPopper(openAccount(event.currentTarget))
                        }
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                        />
                    </IconButton>
                </Tooltip>
                <AccountPopper
                    isOpen={isPopperOpen(NavPoppers.account)}
                    anchorEl={poppers.anchorPopper}
                    onClose={handleClose}
                />
            </FlexBox>
        </ClickAwayListener>
    );
};
