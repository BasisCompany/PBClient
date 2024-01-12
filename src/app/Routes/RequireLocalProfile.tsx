import { useLocation, Navigate, useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { POLICIES } from "../../lib/authorization/policies";

export const RequireLocal = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    const { id } = useParams();
    const location = useLocation();

    if (!POLICIES["profile:local"](user, id)) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};
