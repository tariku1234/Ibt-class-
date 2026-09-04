import { Link } from "react-router-dom";

function Cart({ cart }) {
    return (
        <div>
            <h1>Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <p key={index}>
                            {item.name} - {item.price} ETB
                        </p>
                    ))}

                    <Link to="/checkout">Checkout</Link>
                </>
            )}
        </div>
    );
}

export default Cart;