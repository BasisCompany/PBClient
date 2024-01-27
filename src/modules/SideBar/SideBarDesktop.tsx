import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../redux/hooks";
import { FlexBox } from "../../UI/FlexBox";
import { selectSideBarStatus } from "./store/sidebarSlice";
import { SideBarList } from "./SideBarList";
import { SideBarListMin } from "./SideBarListMin";

const drawerWidth = "240px";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: open ? drawerWidth : `calc(${theme.spacing(7)} + 12px)`,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    overflowX: "hidden",
    borderRight: "0px",
    [theme.breakpoints.up("sm")]: {
        width: open ? drawerWidth : `calc(${theme.spacing(8)} + 12px)`,
    },
    "& .MuiDrawer-paper": {
        backgroundColor: theme.palette.bgcolor.primary.main,
        width: open ? drawerWidth : `calc(${theme.spacing(7)} + 12px)`,
        overflowX: "hidden",
        borderRight: "0px",
        [theme.breakpoints.up("sm")]: {
            width: open ? drawerWidth : `calc(${theme.spacing(8)} + 12px)`,
        },
    },
}));

export const SideBarDesktop = () => {
    const isOpen = useAppSelector(selectSideBarStatus);
    return (
        <FlexBox>
            <Drawer variant="permanent" open={isOpen}>
                <DrawerHeader />
                {isOpen ? <SideBarList /> : <SideBarListMin />}
            </Drawer>
        </FlexBox>
    );
};
