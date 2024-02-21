import { useLocation, Navigate, useParams, Outlet } from "react-router";
import { useAuth } from "../../shared/hooks/useAuth";
import { POLICIES } from "../../shared/lib/authorization/policies";

export const RequireLocalProfile = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const location = useLocation();

    if (!POLICIES["profile:local"](user, id)) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
};
