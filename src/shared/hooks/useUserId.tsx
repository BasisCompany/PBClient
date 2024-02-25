import { useAppSelector } from "@/app/appStore";
import { selectUserId } from "@/entities/auth";

export const useUserId = () => {
    return useAppSelector(selectUserId);
};
