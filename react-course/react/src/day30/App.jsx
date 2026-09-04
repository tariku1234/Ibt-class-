import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Dish from "./pages/Dish";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(dish) {
        setCart((currentCart) => [...currentCart, dish]);
    }

    return (
        <Routes>
            <Route path="/" element={<Layout cart={cart} />}>
                <Route index element={<Home />} />

                <Route
                    path="menu"
                    element={<Menu onAddToCart={addToCart} />}
                />

                <Route
                    path="menu/:id"
                    element={<Dish onAddToCart={addToCart} />}
                />

                <Route path="cart" element={<Cart cart={cart} />} />

                <Route path="login" element={<Login />} />

                <Route element={<RequireAuth />}>
                    <Route
                        path="checkout"
                        element={<Checkout cart={cart} />}
                    />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;