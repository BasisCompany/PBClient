import { ReactNode, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserDetails } from "../pages/AuthPage/store/authSlice";
import { Comment } from "../types/comments.type";

export enum ROLES {
    ADMIN = "ADMIN",
    USER = "USER",
}

type RoleTypes = keyof typeof ROLES;

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

export const useAuthorization = () => {
    const { user } = useAuth();

    const checkAccess = useCallback(
        ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
            if (!user) {
                return false;
            }
            if (allowedRoles && allowedRoles.length > 0) {
                return allowedRoles.every((role) => user.roles.includes(role));
            }
            return true;
        },
        [user]
    );

    return { checkAccess };
};

type AuthorizationProps = {
    forbiddenFallback?: ReactNode;
    children: ReactNode;
} & (
    | {
          allowedRoles: RoleTypes[];
          policyCheck?: never;
      }
    | {
          allowedRoles?: never;
          policyCheck: boolean;
      }
);

export const Authorization = ({
    policyCheck,
    allowedRoles,
    forbiddenFallback = null,
    children,
}: AuthorizationProps) => {
    const { checkAccess } = useAuthorization();

    let canAccess = false;

    if (allowedRoles) {
        canAccess = checkAccess({ allowedRoles });
    }

    if (typeof policyCheck !== "undefined") {
        canAccess = policyCheck;
    }

    return <>{canAccess ? children : forbiddenFallback}</>;
};
