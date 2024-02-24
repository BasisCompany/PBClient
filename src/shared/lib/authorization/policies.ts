import { ROLES } from "./roles.enum";
import { Comment } from "@/entities/comment";
import { UserDetails } from "@/pages/AuthPage/store/authSlice";

export const POLICIES = {
    "comment:delete": (user: UserDetails, comment: Comment) => {
        if (user.roles.includes(ROLES.ADMIN)) {
            return true;
        }

        if (user.roles.includes(ROLES.USER) && comment.userId === user.id) {
            return true;
        }

        return false;
    },
    "profile:local": (user: UserDetails | null, id: string | undefined) => {
        return user?.id === Number(id);
    },
};
