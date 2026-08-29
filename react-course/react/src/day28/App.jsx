import Header from "./Header";
import Menu from "./Menu";
import DeliveryForm from "./components/DeliveryForm";

function App() {
    return (
        <div className="app">
            <Header />

            <main className="container">
                <Menu />

                <DeliveryForm />
            </main>
        </div>
    );
}

export default App;