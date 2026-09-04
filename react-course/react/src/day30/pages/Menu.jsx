import { useSearchParams } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import DishCard from "../components/DishCard";

const menu = [
    { id: 1, name: "Doro Wot", category: "Main", price: 250 },
    { id: 2, name: "Shiro", category: "Main", price: 180 },
    { id: 3, name: "Sambusa", category: "Starter", price: 80 },
    { id: 4, name: "Buna", category: "Drink", price: 50 },
];

function Menu({ onAddToCart }) {
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");

    const filteredMenu = category
        ? menu.filter((dish) => dish.category === category)
        : menu;

    return (
        <div>
            <h1>Menu</h1>

            <CategoryBar />

            {filteredMenu.map((dish) => (
                <DishCard
                    key={dish.id}
                    dish={dish}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default Menu;