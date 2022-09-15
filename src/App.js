import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import FashionProduct from "./Components/FashionProduct";

function App() {
  return (
    <>
      <div>

        <Header />
        <Navbar />
        <HeroPage />
        <FashionProduct />
      </div>
    </>
  );
}

export default App;
