import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";
import { RootState } from "../../redux/store";

interface SnackbarState {
    isOpen: boolean;
    type: AlertColor | undefined;
    message: string | null;
}

const initialState: SnackbarState = {
    isOpen: false,
    type: undefined,
    message: null,
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        setSnackbar: (
            state,
            action: PayloadAction<Omit<SnackbarState, "isOpen">>
        ) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.isOpen = true;
        },
        setSnackbarClear: (state) => {
            state.isOpen = false;
        },
    },
});

export const { setSnackbar, setSnackbarClear } = snackbarSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar;

export default snackbarSlice.reducer;
