import { Id, toast } from "react-toastify";
import { alpha } from "@mui/material";
import { pbColors } from "../Theme";

export const toaster = (message: string): Id => toast(message);

toaster.success = (message: string): Id =>
    toast.success(message, {
        style: { backgroundColor: alpha(pbColors.green, 1) },
    });

toaster.error = (message: string): Id => toast.error(message);

toaster.info = (message: string): Id =>
    toast.info(message, {
        style: { backgroundColor: "rgba(4,154,222,1)" },
    });

toaster.warn = (message: string): Id =>
    toast.warn(message, {
        style: { backgroundColor: "rgba(255,152,0,1)" },
    });
