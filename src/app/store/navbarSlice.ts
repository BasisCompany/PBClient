import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface NavBarState {
    open: boolean;
}

const initialState: NavBarState = {
    open: false,
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNavbarOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        toggleNavbar: (state) => {
            state.open = !state.open;
        },
    },
});

export const { setNavbarOpen, toggleNavbar } = navbarSlice.actions;

export const selectNavbarStatus = (state: RootState) => state.navbar.open;

export default navbarSlice.reducer;
