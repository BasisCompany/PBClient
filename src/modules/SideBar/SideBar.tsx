import { useCallback } from "react";
import { Drawer, Toolbar, styled } from "@mui/material";
import { SideBarList } from "./SideBarList";
import { closeSidebar, selectSideBarStatus } from "@/entities/sidebar";
import { useAppSelector, useAppDispatch } from "@/app/appStore";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { FlexBox } from "@/shared/ui/FlexBox";

const MobileDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
        backgroundImage: "none",
        width: "240px",
    },
});

const DesktopDrawer = styled(Drawer)({
    width: "80px",
    "& .MuiDrawer-paper": {
        borderRight: "0px",
        width: "80px",
    },
});

export const SideBar = () => {
    const isMobile = useMobileDevice();

    const isOpen = useAppSelector(selectSideBarStatus);
    const dispatch = useAppDispatch();

    const closeDrawer = useCallback(
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ["Tab", "Shift"].includes((event as React.KeyboardEvent).key)
            ) {
                return;
            }
            dispatch(closeSidebar());
        },
        [dispatch]
    );

    return (
        <FlexBox onKeyDown={closeDrawer}>
            {isMobile ? (
                <MobileDrawer open={isOpen} onClose={closeDrawer}>
                    <Toolbar />
                    <SideBarList />
                </MobileDrawer>
            ) : (
                <DesktopDrawer variant="permanent">
                    <Toolbar />
                    <SideBarList />
                </DesktopDrawer>
            )}
        </FlexBox>
    );
};
