import { Logout, Settings } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
    Avatar,
    Badge,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Popper,
    styled,
} from "@mui/material";
import { FC } from "react";
import { CustomButton } from "../../../../UI/Buttons/CustomButton";
import { ColorTypography } from "../../../../UI/ColorTypography";
import { Spacer } from "../../../../UI/Spacer";
import { useThemeMode } from "../../../../app/Theme/ThemeContext/useThemeMode";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";

interface AccountMenuProps {
    isOpen: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const StyledList = styled(List)({
    "& .MuiListItemButton-root": {
        paddingLeft: 24,
        paddingRight: 24,
    },
    "& .MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
        fontSize: 20,
    },
});

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
                backgroundColor: "primary.main",
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
            <StyledList>
                <Box
                    sx={{
                        backgroundColor: "#1a1a1b",
                        margin: 1,
                        borderRadius: "10px",
                    }}
                >
                    <ListItemButton
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
                                <ColorTypography>Stormpero</ColorTypography>
                                <ColorTypography>
                                    staroselsky.S@yandex.ru
                                </ColorTypography>
                            </Box>
                        </Box>
                        <ChevronRightIcon
                            sx={{
                                color: "text.primary",
                            }}
                        />
                    </ListItemButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 2,
                        }}
                    >
                        <ColorTypography>0 ₽</ColorTypography>
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
                        <ListItem disablePadding>
                            <ListItemButton onClick={onClose}>
                                <ListItemIcon>
                                    <BookmarkIcon fontSize="small" />
                                </ListItemIcon>
                                Избранное
                            </ListItemButton>
                        </ListItem>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingBasketIcon fontSize="small" />
                                </Badge>
                            </ListItemIcon>
                            Корзина
                        </ListItemButton>
                        <ListItemButton onClick={onClose}>
                            <ListItemIcon>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon fontSize="small" />
                                </Badge>
                            </ListItemIcon>
                            Уведомления
                        </ListItemButton>
                    </>
                )}
                <ListItemButton
                    onClick={toggleThemeMode}
                    sx={{ color: "text.primary" }}
                    selected
                >
                    <ListItemIcon>
                        {mode === "light" ? (
                            <DarkModeRoundedIcon fontSize="small" />
                        ) : (
                            <LightModeRoundedIcon />
                        )}
                    </ListItemIcon>
                    {mode === "light" ? "Тёмная тема" : "Светлая тема"}
                </ListItemButton>
                <Divider />
                <ListItem disablePadding sx={{ color: "text.primary" }}>
                    <ListItemButton onClick={onClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Настройки
                    </ListItemButton>
                </ListItem>
                <ListItemButton
                    onClick={onClose}
                    sx={{ color: "text.primary" }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" color="error" />
                    </ListItemIcon>
                    Выход
                </ListItemButton>
            </StyledList>
        </Popper>
    );
};
