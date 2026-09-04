import { Link, useParams } from "react-router-dom";

const menu = [
    { id: 1, name: "Doro Wot", category: "Main", price: 250 },
    { id: 2, name: "Shiro", category: "Main", price: 180 },
    { id: 3, name: "Sambusa", category: "Starter", price: 80 },
    { id: 4, name: "Buna", category: "Drink", price: 50 },
];

function Dish({ onAddToCart }) {
    const { id } = useParams();

    const dish = menu.find((item) => item.id === Number(id));

    if (!dish) {
        return <h1>Dish Not Found</h1>;
    }

    return (
        <div>
            <h1>{dish.name}</h1>
            <p>Category: {dish.category}</p>
            <p>Price: {dish.price} ETB</p>

            <button onClick={() => onAddToCart(dish)}>
                Add to Cart
            </button>

            <br />

            <Link to="/menu">Back to Menu</Link>
        </div>
    );
}

export default Dish;