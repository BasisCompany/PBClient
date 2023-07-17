import React from "react";
import PropTypes from "prop-types";
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
    },
];

const NavBarContentOpen = () => {
    return (
        <>
            <List sx={{}}>
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
                                mr: open ? 0.5 : "none",
                                ml: open ? 0.5 : "none",
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
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
                                mr: open ? 0.5 : "none",
                                ml: open ? 0.5 : "none",
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    opacity: open ? 1 : 0,
                                }}
                            />
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

NavBarContentOpen.propTypes = {
    children: PropTypes.any,
};

export default NavBarContentOpen;
