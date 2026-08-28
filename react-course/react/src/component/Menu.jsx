import Dish from "./Dish"


export default function Menu() {
    const food = {
        name: "gomen",
        price: 200,
        curency: "PND"
    }

    return (
        <div>Menu
            <h2>todays dish</h2>
            <Dish >{food}</Dish>
        </div>

    )
}
