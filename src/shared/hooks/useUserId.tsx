import { useAppSelector } from "@/app/appStore";
import { selectUserId } from "@/pages/AuthPage/store/authSlice";

export const useUserId = () => {
    return useAppSelector(selectUserId);
};
