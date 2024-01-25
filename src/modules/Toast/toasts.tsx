import { Id, toast } from "react-toastify";

export const toaster = (message: string): Id => toast(message);

toaster.success = (message: string): Id => toast.success(message);

toaster.error = (message: string): Id => toast.error(message);

toaster.info = (message: string): Id => toast.info(message);

toaster.warn = (message: string): Id => toast.warn(message);
