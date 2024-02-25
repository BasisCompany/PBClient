import { useAppSelector } from "@/app/appStore";
import { selectAuth } from "@/entities/auth";

export const useAuth = () => {
    return useAppSelector(selectAuth);
};
