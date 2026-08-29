import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [total, setTotal] = useState(0);

    const categories = [
        "All",
        "Main",
        "Starter",
        "Breakfast",
    ];

    const dishes = [
        {
            id: 1,
            name: "Doro Wat",
            price: 240,
            category: "Main",
            spicy: true,
        },
        {
            id: 2,
            name: "Shiro",
            price: 120,
            category: "Main",
            spicy: false,
        },
        {
            id: 3,
            name: "Tibs",
            price: 280,
            category: "Main",
            spicy: true,
        },
        {
            id: 4,
            name: "Sambusa",
            price: 80,
            category: "Starter",
            spicy: false,
        },
        {
            id: 5,
            name: "Azifa",
            price: 100,
            category: "Starter",
            spicy: false,
        },
        {
            id: 6,
            name: "Firfir",
            price: 150,
            category: "Breakfast",
            spicy: true,
        },
    ];

    const filteredDishes =
        selectedCategory === "All"
            ? dishes
            : dishes.filter(
                (dish) => dish.category === selectedCategory
            );

    function handleAdd(price) {
        setTotal((currentTotal) => currentTotal + price);
    }

    return (
        <section>
            <h2>Our Menu</h2>

            <CategoryBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <h2>{selectedCategory} Dishes</h2>

            <DishList
                dishes={filteredDishes}
                onAdd={handleAdd}
            />

            <div className="order-total">
                <h2>
                    Order Total: {total} ETB
                </h2>
            </div>
        </section>
    );
}

export default Menu;