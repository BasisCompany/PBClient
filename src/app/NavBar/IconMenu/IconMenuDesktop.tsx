import { IconButton, Badge, Avatar, Tooltip, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const IconMenuDesktop = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Tooltip title="Избранное" disableInteractive>
                <IconButton size="large" color="inherit">
                    <BookmarkIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Корзина" disableInteractive>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingBasketIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Tooltip title="Уведомления" disableInteractive>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Tooltip title="Профиль" disableInteractive>
                <IconButton size="small" color="inherit">
                    <Avatar
                        variant="rounded"
                        alt="Remy Sharp"
                        src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                    />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
