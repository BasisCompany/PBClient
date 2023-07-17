import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { Link as RouterLink } from "react-router-dom";
import MuiListItemButton from "@mui/material/ListItemButton";

const StyledListItemButton = styled(MuiListItemButton)`
    transition: none !important;
`;

const menuUser = [
    {
        title: "Главная",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
    {
        title: "Магазин",
        icon: (
            <StorefrontRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/marketplace",
    },
    {
        title: "Профиль",
        icon: (
            <PersonRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/profile",
    },
    {
        title: "FAQ",
        icon: (
            <QuizRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/login",
    },
];
const menuAdmin = [
    {
        title: "Главная",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/login",
    },
    {
        title: "Магазин",
        icon: (
            <StorefrontRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/login",
    },
];

export const NavBarContentClose = () => {
    return (
        <>
            <List>
                {menuUser.map((item) => (
                    <ListItem
                        key={item.title}
                        component={RouterLink}
                        to={item.to}
                        disablePadding
                        sx={{
                            textDecoration: "none",

                            color: "text.primary",
                            display: "block",
                            "& :hover": {
                                borderRadius: "15px",
                            },
                        }}
                    >
                        <StyledListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                paddingTop: "10px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText secondary={item.title} />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider
                sx={{
                    bgcolor: "text.secondary",
                }}
            />
            <List sx={{}}>
                {menuAdmin.map((item) => (
                    <ListItem
                        key={item.title}
                        component={RouterLink}
                        to={item.to}
                        disablePadding
                        sx={{
                            textDecoration: "none",
                            color: "text.primary",
                            display: "block",
                            "& :hover": {
                                borderRadius: "15px",
                            },
                        }}
                    >
                        <StyledListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText secondary={item.title} />
                        </StyledListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider
                sx={{
                    bgcolor: "text.secondary",
                }}
            />
        </>
    );
};
