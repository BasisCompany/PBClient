import { FC } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSnackbar, setSnackbarClear } from "./snackbarSlice";

export const AppSnackbar: FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen, type, message } = useAppSelector(selectSnackbar);

    const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setSnackbarClear());
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                variant="filled"
                elevation={6}
                onClose={handleClose}
                severity={type}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
