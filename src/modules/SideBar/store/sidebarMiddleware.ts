import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "../../../app/appStore";
import { sidebarMode } from "../../../storage";
import { setSidebarOpen, toggleSidebar } from "./sidebarSlice";

export const sidebarlistenerMiddleware = createListenerMiddleware();

sidebarlistenerMiddleware.startListening({
    matcher: isAnyOf(setSidebarOpen, toggleSidebar),
    effect: (_, listenerApi) => {
        sidebarMode.setSidebarMode(
            (listenerApi.getState() as RootState).sidebar.open
        );
    },
});

export const sidebarInitState = () => {
    const sidebarState = sidebarMode.getSidebarMode();
    return { open: sidebarState ?? false };
};
