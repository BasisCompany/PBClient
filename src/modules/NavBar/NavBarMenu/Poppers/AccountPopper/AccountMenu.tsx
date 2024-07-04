import {
    alpha,
    Badge,
    List,
    ListItemButton,
    ListItemIcon,
    styled,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router";
import { usePopper } from "../../ui/NavbarPopper";
import { useThemeMode } from "@/app/providers/Theme/ThemeContext/useThemeMode";
import { EThemeMode } from "@/app/providers/Theme/enums/themeMode.enum";
import { useLazyLogoutQuery } from "@/entities/auth";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { LinkListItemButton } from "@/shared/ui/Links/LinkListItemButton";
import { useUserId } from "@/shared/hooks/useUserId";
import { pbColors } from "@/app/providers/Theme";

const StyledList = styled(List)(({ theme }) => ({
    "& .MuiListItemButton-root": {
        paddingLeft: 18,
        color: theme.palette.text.primary,
        ":hover": {
            backgroundColor: theme.palette.bgcolor.modal.primary.hover,
        },
    },
    "& .MuiListItemButton-root:last-child": {
        "&:hover": {
            transition: "all 0.2s ease-in",
            backgroundColor: alpha(pbColors.red, 0.2),
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

export const AccountMenu = () => {
    const { closePopper } = usePopper();

    const isMobile = useMobileDevice();
    const userId = useUserId();
    const navigate = useNavigate();

    const { mode, toggleThemeMode } = useThemeMode();

    const [logout] = useLazyLogoutQuery();

    const handleLogout = async () => {
        await logout();
        closePopper();
        navigate("/login");
    };

    return (
        <StyledList>
            {isMobile && (
                <>
                    <LinkListItemButton to="favorites" onClick={closePopper}>
                        <ListItemIcon>
                            <BookmarkIcon />
                        </ListItemIcon>
                        Избранное
                    </LinkListItemButton>
                    <LinkListItemButton to="cart" onClick={closePopper}>
                        <ListItemIcon>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </ListItemIcon>
                        Корзина
                    </LinkListItemButton>
                    <LinkListItemButton
                        to={`user/${userId}/notifications`}
                        onClick={closePopper}
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
            <LinkListItemButton to="/support" onClick={closePopper}>
                <ListItemIcon>
                    <HelpOutlineIcon />
                </ListItemIcon>
                Помощь
            </LinkListItemButton>
            <LinkListItemButton
                to={`user/${userId}/settings`}
                onClick={closePopper}
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
    );
};
