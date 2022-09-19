import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import FashionProduct from "./Components/FashionProduct";
import EightCards from "./Components/EightCards";
import TodayDeal from "./Components/TodayDeal";
import TshirtCollection from "./Components/TshirtCollection";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <HeroPage />
        <FashionProduct />
        <EightCards />
        <TshirtCollection />
        <TodayDeal />

      </div>
    </>
  );
}

export default App;
