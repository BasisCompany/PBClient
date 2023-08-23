import { Logout, Settings } from "@mui/icons-material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
    Avatar,
    Badge,
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    Popper,
    Typography,
    styled,
} from "@mui/material";
import { FC } from "react";
import { Spacer } from "../../../../UI/Spacer";
import { useThemeMode } from "../../../../app/Theme/ThemeContext/useThemeMode";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { LinkBehavior } from "../../../../UI/Route/LinkBehavior";
import { LinkListItemButton } from "../../../../UI/Buttons/LinkListItemButton";

interface AccountMenuProps {
    isOpen: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const StyledList = styled(List)(({ theme }) => ({
    "& .MuiListItemButton-root": {
        paddingLeft: 18,
        color: theme.palette.text.primary,
        ":hover": {
            backgroundColor: theme.palette.bgcolor.modal.primary.hover,
        },
    },
    "& .MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
        fontSize: 20,
    },
}));
//TODO[Aртем]: Размеры каждого эл-та
export const AccountPopper: FC<AccountMenuProps> = ({
    isOpen,
    anchorEl,
    onClose,
}) => {
    const isMobile = useMobileDevice();
    const { mode, toggleThemeMode } = useThemeMode();

    const id = isOpen ? "account-popover" : undefined;
    return (
        <Popper
            id={id}
            open={isOpen}
            anchorEl={anchorEl}
            placement="bottom-end"
            sx={{
                zIndex: 1250,
                bgcolor: (theme) => theme.palette.bgcolor.modal.primary.main,
                borderRadius: "5px",
                "& .MuiPaper-root": {
                    minWidth: "200px",
                },
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
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.bgcolor.modal.secondary.main,
                    margin: 2,
                    mb: 0,
                    borderRadius: "10px",
                }}
            >
                <ListItemButton
                    onClick={onClose}
                    sx={{
                        borderRadius: "10px 10px 0px 0px",
                        ":hover": {
                            backgroundColor: (theme) =>
                                theme.palette.bgcolor.modal.secondary.hover,
                        },
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
                    <ChevronRightIcon
                        sx={{
                            color: "text.primary",
                        }}
                    />
                </ListItemButton>
                <ListItemButton
                    onClick={onClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        borderRadius: "0px 0px 10px 10px",
                        ":hover": {
                            backgroundColor: (theme) =>
                                theme.palette.bgcolor.modal.secondary.hover,
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px",
                        }}
                    >
                        <AccountBalanceWalletIcon
                            sx={{
                                color: "text.primary",
                                mr: 1.5,
                            }}
                        />
                        <Typography
                            sx={{
                                textAlign: "center",
                                verticalAlign: "center",
                                mt: "3px",
                            }}
                        >
                            0 ₽
                        </Typography>
                    </Box>
                    <Spacer />
                    <AddCircleOutlineIcon
                        sx={{
                            color: "text.primary",
                        }}
                    />
                </ListItemButton>
            </Box>
            <StyledList>
                {isMobile && (
                    <>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <BookmarkIcon fontSize="small" />
                            </ListItemIcon>
                            Избранное
                        </ListItemButton>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingBasketIcon fontSize="small" />
                                </Badge>
                            </ListItemIcon>
                            Корзина
                        </ListItemButton>
                        <LinkListItemButton
                            to="profile/notifications"
                            onClick={onClose}
                        >
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon fontSize="small" />
                                </Badge>
                            </ListItemIcon>
                            Уведомления
                        </LinkListItemButton>
                    </>
                )}
                <ListItemButton onClick={toggleThemeMode}>
                    <ListItemIcon>
                        {mode === "light" ? (
                            <DarkModeRoundedIcon fontSize="small" />
                        ) : (
                            <LightModeRoundedIcon />
                        )}
                    </ListItemIcon>
                    {mode === "light" ? "Тёмная тема" : "Светлая тема"}
                </ListItemButton>
                <LinkListItemButton to="/faq" onClick={onClose}>
                    <ListItemIcon>
                        <HelpOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    Помощь
                </LinkListItemButton>
                <LinkListItemButton to="profile/settings" onClick={onClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Настройки
                </LinkListItemButton>
                <ListItemButton onClick={onClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="error" />
                    </ListItemIcon>
                    Выход
                </ListItemButton>
            </StyledList>
        </Popper>
    );
};
