import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Addis Eats</h1>
            <Link to="/menu">View Menu</Link>
        </div>
    );
}

export default Home;