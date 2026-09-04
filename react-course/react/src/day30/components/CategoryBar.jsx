import { useSearchParams } from "react-router-dom";

function CategoryBar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentCategory = searchParams.get("category") || "All";

    const categories = ["All", "Main", "Starter", "Drink"];

    function handleCategory(category) {
        if (category === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    }

    return (
        <div>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryBar;