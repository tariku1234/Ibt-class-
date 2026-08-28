
export default function Dish({name , price, curency= "ETB"}) {
  return (
    <div>dish
      <h3>{name}</h3>
      <p>price : {price} {curency}</p>

    </div>
  )
}
