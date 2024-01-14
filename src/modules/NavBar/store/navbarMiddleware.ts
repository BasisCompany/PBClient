import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { navbarMode } from "../../../storage";
import { RootState } from "../../../redux/store";
import { setNavbarOpen, toggleNavbar } from "./navbarSlice";

export const navbarlistenerMiddleware = createListenerMiddleware();
navbarlistenerMiddleware.startListening({
    matcher: isAnyOf(setNavbarOpen, toggleNavbar),
    effect: (_, listenerApi) => {
        navbarMode.setNavbarMode(
            (listenerApi.getState() as RootState).navbar.open
        );
    },
});

export const navbarInitState = () => {
    const navbarState = navbarMode.getNavbarMode();
    return { open: navbarState ?? false };
};
