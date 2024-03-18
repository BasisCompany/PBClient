import { FC } from "react";
import {
    Badge,
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    Popper,
    Typography,
    styled,
} from "@mui/material";
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
import { useNavigate } from "react-router";
import { useThemeMode } from "@/app/providers/Theme/ThemeContext/useThemeMode";
import { EThemeMode } from "@/app/providers/Theme/enums/themeMode.enum";
import { useLazyLogoutQuery } from "@/entities/auth";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { LinkListItemButton } from "@/shared/ui/Links/LinkListItemButton";
import { Spacer } from "@/shared/ui/Spacer";
import { useUserId } from "@/shared/hooks/useUserId";
import { useAuth } from "@/shared/hooks/useAuth";
import { Avatar } from "@/shared/ui/Image/Avatar";

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

//TODO[Артем]: Размеры каждого эл-та
export const AccountPopper: FC<AccountMenuProps> = ({
    isOpen,
    anchorEl,
    onClose,
}) => {
    const isMobile = useMobileDevice();
    const userId = useUserId();
    const navigate = useNavigate();

    const { mode, toggleThemeMode } = useThemeMode();

    const { user } = useAuth();

    const [logout] = useLazyLogoutQuery();

    const handleLogout = async () => {
        await logout();
        onClose();
        navigate("/login");
    };

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
                <LinkListItemButton
                    to={`user/${userId}`}
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
                            src={user?.thumb}
                            alt={user?.username}
                            width="40px"
                            height="40px"
                            borderRadius="50%"
                        />
                        <Box sx={{ ml: 2 }}>
                            <Typography>{user?.username}</Typography>
                            <Typography>{user?.email}</Typography>
                        </Box>
                    </Box>
                    <ChevronRightIcon
                        sx={{
                            color: "text.primary",
                        }}
                    />
                </LinkListItemButton>
                <LinkListItemButton
                    to={`user/${userId}/payments`}
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
                </LinkListItemButton>
            </Box>
            <StyledList>
                {isMobile && (
                    <>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <BookmarkIcon />
                            </ListItemIcon>
                            Избранное
                        </ListItemButton>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingBasketIcon />
                                </Badge>
                            </ListItemIcon>
                            Корзина
                        </ListItemButton>
                        <LinkListItemButton
                            to={`user/${userId}/notifications`}
                            onClick={onClose}
                        >
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </ListItemIcon>
                            Уведомления
                        </LinkListItemButton>
                    </>
                )}
                <ListItemButton onClick={toggleThemeMode}>
                    <ListItemIcon>
                        {mode === EThemeMode.light ? (
                            <DarkModeRoundedIcon />
                        ) : (
                            <LightModeRoundedIcon />
                        )}
                    </ListItemIcon>
                    {mode === EThemeMode.light ? "Тёмная тема" : "Светлая тема"}
                </ListItemButton>
                <LinkListItemButton to="/support" onClick={onClose}>
                    <ListItemIcon>
                        <HelpOutlineIcon />
                    </ListItemIcon>
                    Помощь
                </LinkListItemButton>
                <LinkListItemButton
                    to={`user/${userId}/settings`}
                    onClick={onClose}
                >
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    Настройки
                </LinkListItemButton>
                <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout color="error" />
                    </ListItemIcon>
                    Выход
                </ListItemButton>
            </StyledList>
        </Popper>
    );
};
