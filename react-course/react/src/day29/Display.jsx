function Display({ menu }) {
    return (
        <ul>
            {menu.map((dish) => (
                <li key={dish.id}>
                    <h3>{dish.name}</h3>
                    <p>{dish.price} ETB</p>
                    <p>{dish.category}</p>
                </li>
            ))}
        </ul>
    );
}

export default Display;