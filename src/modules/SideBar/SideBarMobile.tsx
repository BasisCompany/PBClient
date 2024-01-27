import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { FlexBox } from "../../UI/FlexBox";
import { selectSideBarStatus, setSidebarOpen } from "./store/sidebarSlice";
import { SideBarList } from "./SideBarList";

const MobileDrawer = styled(Drawer)({
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
    ...theme.mixins.toolbar,
}));

export const SideBarMobile = () => {
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

    return (
        <FlexBox onKeyDown={closeDrawer}>
            <MobileDrawer open={isOpen} onClose={closeDrawer}>
                <DrawerHeader />
                <SideBarList />
            </MobileDrawer>
        </FlexBox>
    );
};
