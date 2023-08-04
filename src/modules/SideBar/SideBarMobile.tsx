import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectNavbarStatus, setNavbarOpen } from "../NavBar/store/navbarSlice";
import { SideBarContent } from "./SideBarContent";

const CustomDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
        backgroundImage: "none",
        width: "240px",
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

export const SideBarMobile = () => {
    const isOpen = useAppSelector(selectNavbarStatus);
    const dispatch = useAppDispatch();

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            dispatch(setNavbarOpen(open));
        };

    return (
        <Box sx={{ display: "flex" }} onKeyDown={toggleDrawer(false)}>
            <CustomDrawer open={isOpen} onClose={toggleDrawer(false)}>
                <DrawerHeader />
                {isOpen && <SideBarContent />}
            </CustomDrawer>
        </Box>
    );
};
