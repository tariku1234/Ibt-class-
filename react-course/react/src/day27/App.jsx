import { useState } from "react";
import Header from "./Header";
import Dish from "./Dish";
import Card from "./Card";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

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

    return (
        <div className="app">
            <Header />

            <main className="container">
                <h2>Our Menu</h2>

                <div className="filter-buttons">
                    <button
                        onClick={() => setSelectedCategory("All")}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setSelectedCategory("Main")}
                    >
                        Main
                    </button>

                    <button
                        onClick={() => setSelectedCategory("Starter")}
                    >
                        Starter
                    </button>

                    <button
                        onClick={() => setSelectedCategory("Breakfast")}
                    >
                        Breakfast
                    </button>

                    <button
                        onClick={() => setSelectedCategory("Dessert")}
                    >
                        Dessert
                    </button>
                </div>

                <h2>{selectedCategory} Dishes</h2>

                {filteredDishes.length === 0 ? (
                    <p className="empty-message">
                        No dishes found in this category.
                    </p>
                ) : (
                    <div className="dish-list">
                        {filteredDishes.map((dish) => (
                            <Card key={dish.id}>
                                <Dish
                                    name={dish.name}
                                    price={dish.price}
                                    spicy={dish.spicy}
                                />
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;