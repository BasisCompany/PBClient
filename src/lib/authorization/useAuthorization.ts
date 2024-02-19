import { useCallback } from "react";
import { useAuth } from "../../shared/hooks/useAuth";
import { RoleTypes } from "./roles.enum";

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
