import { useAppSelector } from "../../app/appStore";
import { selectAuth } from "../../pages/AuthPage/store/authSlice";

export const useAuth = () => {
    return useAppSelector(selectAuth);
};
