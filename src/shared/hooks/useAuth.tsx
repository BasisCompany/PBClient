import { selectAuth } from "../../pages/AuthPage/store/authSlice";
import { useAppSelector } from "../../redux/hooks";

export const useAuth = () => {
    return useAppSelector(selectAuth);
};
