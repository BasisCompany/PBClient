import { ReactNode } from "react";
import { RoleTypes } from "./roles.enum";
import { useAuthorization } from "./useAuthorization";

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
