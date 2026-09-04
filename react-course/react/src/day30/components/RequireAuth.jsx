import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
    const location = useLocation();

    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    return <Outlet />;
}

export default RequireAuth;