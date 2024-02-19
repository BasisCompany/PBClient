import { UserDetails } from "../../../pages/AuthPage/store/authSlice";
import { Comment } from "../../../types/comments.type";
import { ROLES } from "./roles.enum";

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
