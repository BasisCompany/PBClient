import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectNavbarStatus, setNavbarOpen } from "../store/navbarSlice";
import { NavBarContentOpen } from "./NavBarContentOpen";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        width: "240px",
    },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const NavBarMobile = () => {
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
        <Box
            sx={{ display: "flex" }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <CustomDrawer
                open={isOpen}
                onClose={toggleDrawer(false)} //FIXME
                sx={{
                    display: { xs: "block", sm: "none" },
                }}
            >
                <DrawerHeader></DrawerHeader>
                {isOpen ? <NavBarContentOpen /> : null}
            </CustomDrawer>
        </Box>
    );
};
