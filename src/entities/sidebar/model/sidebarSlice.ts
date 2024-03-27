import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore";

interface NavBarState {
    open: boolean;
}

const initialState: NavBarState = {
    open: false,
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
        closeSidebar: (state) => {
            state.open = false;
        },
    },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

export const selectSideBarStatus = (state: RootState) => state.sidebar.open;
