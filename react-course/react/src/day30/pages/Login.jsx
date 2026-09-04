import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    function handleLogin(event) {
        event.preventDefault();

        localStorage.setItem("isLoggedIn", "true");

        navigate(from, { replace: true });
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Username"
                required
            />

            <button type="submit">Sign In</button>
        </form>
    );
}

export default Login;