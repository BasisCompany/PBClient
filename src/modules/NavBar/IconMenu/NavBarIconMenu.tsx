import { useState } from "react";
import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { FlexBox } from "../../../UI/FlexBox";
import { useMobileDevice } from "../../../hooks/useMobileDevice";
import { AccountMenu } from "./AccountMenu";

export const NavBarIconMenu = () => {
    const isMobile = useMobileDevice();
    const [anchorAccountMenu, setAnchorAccountMenu] =
        useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorAccountMenu(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorAccountMenu(null);
    };

    return (
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
                    <Tooltip title="Уведомления" disableInteractive>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </>
            )}
            <Tooltip title="Профиль" disableInteractive>
                <IconButton size="small" color="inherit" onClick={handleClick}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                    />
                </IconButton>
            </Tooltip>
            <AccountMenu anchorEl={anchorAccountMenu} onClose={handleClose} />
        </FlexBox>
    );
};
