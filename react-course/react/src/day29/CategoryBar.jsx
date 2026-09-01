function CategoryBar({ category, setCategory }) {
    const categories = ["All", "Main", "Starter", "Drink"];

    return (
        <div>
            {categories.map((item) => (
                <button
                    key={item}
                    onClick={() => setCategory(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default CategoryBar;