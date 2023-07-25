import { FC } from "react";
import {
    Avatar,
    Badge,
    Box,
    Divider,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
    styled,
} from "@mui/material";
import { useMobileDevice } from "../../../hooks/useMobileDevice";
import { Logout, Settings } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { CustomButton } from "../../../UI/Buttons/CustomButton";
import { Spacer } from "../../../UI/Spacer";

const StyledMenu = styled(Menu)({
    "& .MuiPaper-root": {
        minWidth: "200px",
    },
});

interface AccountMenuProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const AccountMenu: FC<AccountMenuProps> = ({ anchorEl, onClose }) => {
    const isMobile = useMobileDevice();
    const open = Boolean(anchorEl);
    return (
        <StyledMenu anchorEl={anchorEl} open={open} onClose={onClose}>
            {/* <Divider /> */}
            <Box
                sx={{
                    backgroundColor: "#1a1a1b",
                    margin: 1,
                    borderRadius: "10px",
                }}
            >
                <MenuItem
                    onClick={onClose}
                    sx={{
                        borderRadius: "10px 10px 0px 0px",
                    }}
                    divider
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 2,
                            paddingLeft: 1,
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                        />
                        <Box sx={{ ml: 2 }}>
                            <Typography>Stormpero</Typography>
                            <Typography>staroselsky.S@yandex.ru</Typography>
                        </Box>
                    </Box>
                </MenuItem>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: 2,
                    }}
                >
                    <Typography>0 ₽</Typography>
                    <Spacer />
                    <CustomButton
                        variant="outlined"
                        sx={{
                            fontSize: "13px",
                            width: "100px",
                            minHeight: "30px",
                        }}
                    >
                        Пополнить
                    </CustomButton>
                </Box>
            </Box>
            {isMobile && (
                <>
                    <MenuItem onClick={onClose}>
                        <ListItemIcon>
                            <BookmarkIcon fontSize="small" />
                        </ListItemIcon>
                        Избранное
                    </MenuItem>
                    <MenuItem onClick={onClose}>
                        <ListItemIcon>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon fontSize="small" />
                            </Badge>
                        </ListItemIcon>
                        Корзина
                    </MenuItem>
                    <MenuItem onClick={onClose}>
                        <ListItemIcon>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon fontSize="small" />
                            </Badge>
                        </ListItemIcon>
                        Уведомления
                    </MenuItem>
                    <Divider />
                </>
            )}
            <MenuItem onClick={onClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Настройки
            </MenuItem>
            <MenuItem onClick={onClose}>
                <ListItemIcon>
                    <Logout fontSize="small" color="error" />
                </ListItemIcon>
                Выход
            </MenuItem>
        </StyledMenu>
    );
};
