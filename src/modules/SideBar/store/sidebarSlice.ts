import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/appStore";

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
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
    },
});

export const { setSidebarOpen, toggleSidebar } = sidebarSlice.actions;

export const selectSideBarStatus = (state: RootState) => state.sidebar.open;
