import { FC, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

import "react-toastify/dist/ReactToastify.min.css";

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={CloseIcon}
                theme="colored"
                style={{ width: "380px" }}
            />
            {children}
        </>
    );
};
