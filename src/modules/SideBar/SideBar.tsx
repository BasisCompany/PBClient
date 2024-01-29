import { Drawer, DrawerProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FlexBox } from "../../UI/FlexBox";
import { useMobileDevice } from "../../hooks/useMobileDevice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { SideBarList } from "./SideBarList";
import { selectSideBarStatus, setSidebarOpen } from "./store/sidebarSlice";

const drawerWidth = "240px";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const DesktopDrawer = styled(
    (props: DrawerProps) => <Drawer variant="permanent" {...props} />,
    {
        shouldForwardProp: (prop) => prop !== "open",
    }
)(({ theme, open }) => ({
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

const MobileDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
        backgroundImage: "none",
        width: "240px",
    },
});

export const SideBar = () => {
    const isMobile = useMobileDevice();

    const isOpen = useAppSelector(selectSideBarStatus);
    const dispatch = useAppDispatch();

    const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        dispatch(setSidebarOpen(false));
    };

    const DrawerComponent = isMobile ? MobileDrawer : DesktopDrawer;

    return (
        <FlexBox onKeyDown={closeDrawer}>
            <DrawerComponent open={isOpen} onClose={closeDrawer}>
                <DrawerHeader />
                <SideBarList />
            </DrawerComponent>
        </FlexBox>
    );
};
