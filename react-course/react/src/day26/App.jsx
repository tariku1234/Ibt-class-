import Dish from "./Dish";
import Header from "./Header";


function App() {
    const dishes = [
        {
            id: 1,
            name: "Doro Wat",
            price: 240
        },
        {
            id: 2,
            name: "Shiro",
            price: 120
        },
        {
            id: 3,
            name: "Tibs",
            price: 280
        }
    ];
    return (
        <div>

            <Header />
            <h2>Menu</h2>
            {
                dishes.map((dish) => (

                    <Dish
                        key={dish.id}
                        name={dish.name}
                        price={dish.price}
                    />

                ))
            }


        </div>
    );
}


export default App;