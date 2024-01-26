import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CloseIcon from "@mui/icons-material/Close";

export const ToastProvider = () => {
    return (
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
    );
};
