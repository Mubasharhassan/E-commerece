import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import FashionProduct from "./Components/FashionProduct";
import EightCards from "./Components/EightCards";
import TodayDeal from "./Components/TodayDeal";
import TshirtCollection from "./Components/TshirtCollection";
import HotalVeiw from "./Components/HotalVeiw";
import LatestBlog from "./Components/LatestBlog";
import FollowUsInsta from "./Components/FollowUsInsta";
import NewFashion from "./Components/NewFashion";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <HeroPage />
        {/* <FashionProduct /> */}
        <EightCards />
        {/* <TshirtCollection /> */}
        <HotalVeiw />
        <TodayDeal />
        <NewFashion />
        <LatestBlog />
        <FollowUsInsta />
      </div>
    </>
  );
}

export default App;
