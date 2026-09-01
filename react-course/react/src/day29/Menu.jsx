import { useEffect, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import Display from "./Display";

function Menu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [category, setCategory] = useState("All");

    const searchRef = useRef(null);

    // Focus the search input when the component loads
    useEffect(() => {
        searchRef.current.focus();
    }, []);

    // Fetch menu whenever category changes
    useEffect(() => {
        const controller = new AbortController();

        async function loadMenu() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch("/menu.json", {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error("Failed to load the Addis Eats menu.");
                }

                const data = await response.json();

                const filteredMenu =
                    category === "All"
                        ? data
                        : data.filter((dish) => dish.category === category);

                setMenu(filteredMenu);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        loadMenu();

        // Cleanup
        return () => {
            controller.abort();
        };
    }, [category]);

    if (loading) {
        return <p>Loading menu...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Addis Eats</h1>

            <input
                ref={searchRef}
                type="text"
                placeholder="Search dishes..."
            />

            <CategoryBar
                category={category}
                setCategory={setCategory}
            />

            <Display menu={menu} />
        </div>
    );
}

export default Menu;