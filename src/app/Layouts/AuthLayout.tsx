import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../shared/hooks/useAuth";

export const AuthLayout = () => {
    const { isUserAuthenticated } = useAuth();

    if (isUserAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};
