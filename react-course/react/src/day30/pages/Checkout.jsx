function Checkout({ cart }) {
    return (
        <div>
            <h1>Checkout</h1>

            <p>You have {cart.length} item(s) in your cart.</p>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    required
                />

                <input
                    type="text"
                    placeholder="Address"
                    required
                />

                <button type="submit">
                    Place Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;