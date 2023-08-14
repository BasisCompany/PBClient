import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../redux/hooks";
import { selectNavbarStatus } from "../NavBar/store/navbarSlice";
import { SideBarContent } from "./SideBarContent";
import { SideBarContentMin } from "./SideBarContentMin";
import { FlexBox } from "../../UI/FlexBox";

const drawerWidth = "240px";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

// const Drawer = styled(MuiDrawer, {
//     shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//     boxSizing: "border-box",
//     ...(open && {
//         width: drawerWidth,
//         overflowX: "hidden",
//         borderRight: "0px",
//         "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             overflowX: "hidden",
//             borderRight: "0px",
//         },
//     }),
//     ...(!open && {
//         overflowX: "hidden",
//         width: `calc(${theme.spacing(7)} + 12px)`,
//         borderRight: "0px",
//         [theme.breakpoints.up("sm")]: {
//             width: `calc(${theme.spacing(8)} + 12px)`,
//         },
//         "& .MuiDrawer-paper": {
//             overflowX: "hidden",
//             width: `calc(${theme.spacing(7)} + 12px)`,
//             borderRight: "0px",
//             [theme.breakpoints.up("sm")]: {
//                 width: `calc(${theme.spacing(8)} + 12px)`,
//             },
//         },
//     }),
// }));

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
        backgroundColor: theme.palette.bgcolor.content.main,
        width: open ? drawerWidth : `calc(${theme.spacing(7)} + 12px)`,
        overflowX: "hidden",
        borderRight: "0px",
        [theme.breakpoints.up("sm")]: {
            width: open ? drawerWidth : `calc(${theme.spacing(8)} + 12px)`,
        },
    },
}));

export const SideBarDesktop = () => {
    const isOpen = useAppSelector(selectNavbarStatus);
    return (
        <FlexBox>
            <Drawer variant="permanent" open={isOpen}>
                <DrawerHeader />
                {isOpen ? <SideBarContent /> : <SideBarContentMin />}
            </Drawer>
        </FlexBox>
    );
};
