import { AlertColor } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { setSnackbar } from "./snackbarSlice";

export const useSnackbar = () => {
    const dispatch = useAppDispatch();

    const showAlert = (type: AlertColor, message: string) => {
        dispatch(setSnackbar({ message, type }));
    };

    return [showAlert];
};
