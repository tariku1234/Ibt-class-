import PropTypes from "prop-types";
import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
    if (dishes.length === 0) {
        return (
            <p className="empty-message">
                No dishes found in this category.
            </p>
        );
    }

    return (
        <div className="dish-list">
            {dishes.map((dish) => (
                <Dish
                    key={dish.id}
                    name={dish.name}
                    price={dish.price}
                    spicy={dish.spicy}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

DishList.propTypes = {
    dishes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            spicy: PropTypes.bool,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default DishList;