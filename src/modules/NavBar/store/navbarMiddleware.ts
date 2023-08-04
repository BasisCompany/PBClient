import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setNavbarOpen, toggleNavbar } from "./navbarSlice";
import { navbarMode } from "../../../storage";
import { RootState } from "../../../redux/store";

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
