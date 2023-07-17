import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { Theme, styled } from "@mui/material/styles";

import { NavBarContext } from "./NavBarContext";

import NavBarContentOpen from "./NavBarItems";
import NavBarContentClose from "./NavBarContentClose";

const drawerWidth = "240px";

const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    // transition: theme.transitions.create("width", {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    // }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
    // transition: theme.transitions.create("width", {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 12px)`,

    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 12px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const NavBarDesktop = () => {
    const open = false; //FIXME
    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                open={open}
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                <DrawerHeader></DrawerHeader>
                {open ? <NavBarContentOpen /> : <NavBarContentClose />}
            </Drawer>
        </Box>
    );
};

NavBarDesktop.propTypes = {
    children: PropTypes.any,
};

export default NavBarDesktop;
