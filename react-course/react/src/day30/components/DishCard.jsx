import { Link } from "react-router-dom";

function DishCard({ dish, onAddToCart }) {
    return (
        <article>
            <h2>{dish.name}</h2>
            <p>{dish.price} ETB</p>

            <Link to={`/menu/${dish.id}`}>
                View Details
            </Link>

            <button onClick={() => onAddToCart(dish)}>
                Add to Cart
            </button>
        </article>
    );
}

export default DishCard;