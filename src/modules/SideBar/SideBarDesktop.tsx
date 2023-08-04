import { Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { Theme, styled } from "@mui/material/styles";

import { useAppSelector } from "../../redux/hooks";
import { selectNavbarStatus } from "../NavBar/store/navbarSlice";
import { SideBarContent } from "./SideBarContent";
import { SideBarContentMin } from "./SideBarContentMin";

const drawerWidth = "240px";

const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    // transition: theme.transitions.create("width", {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    // }),
    overflowX: "hidden",
    borderRight: "0px",
});

const closedMixin = (theme: Theme) => ({
    // transition: theme.transitions.create("width", {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 12px)`,
    borderRight: "0px",

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

export const SideBarDesktop = () => {
    const isOpen = useAppSelector(selectNavbarStatus);
    return (
        <Box sx={{ display: "flex" }}>
            <Drawer variant="permanent" open={isOpen}>
                <DrawerHeader />
                {isOpen ? <SideBarContent /> : <SideBarContentMin />}
            </Drawer>
        </Box>
    );
};
