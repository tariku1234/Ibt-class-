
import './App.css'
import Header from "./component/Header"
import Home from "./routes/Home"
import Card from "./component/Card"
import Dish from './component/Dish'
import Menu from './component/Menu'

function App() {

  return (
    <>
      <Home></Home>
      <Header></Header>

      <h1>ethiopian restaurant</h1>
      <Card>
        <h2>doro wot </h2>
        <p>price: 500 ETB</p>
      </Card>

      <Card>
        <h2>Shiro</h2>
        <p>Price: 120 ETB</p>
      </Card>
      <Card>
        <button>order now</button>
      </Card>

      <Dish
        name={"tibs"}
        price={250}>

      </Dish>
      <Dish
        name={"shiro"}
        price={10}
        curency='USDT'
      ></Dish>

      <Menu />

    </>
  )
}

export default App
