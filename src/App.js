import "./App.css";

import {BrowserRouter as Router,   Route,Routes } from "react-router-dom";

import Home from "./home/Home";

import Menu from "./pages/menu/Menu";


import About from "./pages/about/About";

import Contact from "./pages/contact/Contact";

import Search from "./pages/search/Search";

import Cart from "./pages/cart/Cart";

import Checkout from "./pages/checkout/Checkout";

import UpdateProfile from "./pages/update-profile/UpdateProfile";

import ProfileInformation from "./pages/account-information/ProfileInformation";

import Login  from "./pages/login/Login";

import Register  from "./pages/register/Register";

import FastFood from "./pages/fast/FastFood";

import Pizza from "./pages/fast/Pizza";

import Pizza2 from "./pages/fast/Pizza2";

import Pizza3 from "./pages/fast/Pizza3";

import Pizza4 from "./pages/fast/Pizza4";

import ZingerBurger from "./pages/fast/ZingerBurger";

import BeefBurger from "./pages/fast/BeefBurger";

import MainDishes from "./pages/main/MainDishes";

import Pasta from "./pages/main/Pasta";

import Pasta2 from "./pages/main/Pasta2";

import Pasta3 from "./pages/main/Pasta3";

import GrilledSteak from "./pages/main/GrilledSteak";

import Drinks from "./pages/drinks/Drinks";

import Juice from "./pages/drinks/Juice";

import Juice2 from "./pages/drinks/Juice2";

import Juice3 from "./pages/drinks/Juice3";

import Juice4 from "./pages/drinks/Juice4";

import Juice5 from "./pages/drinks/Juice5";

import Desserts from "./pages/desserts/Desserts";

import Icecream from "./pages/desserts/Icecream";

import Icecream2 from "./pages/desserts/Icecream2";

import Icecream3 from "./pages/desserts/Icecream3";

import Cake from "./pages/desserts/Cake";

import Cake2 from "./pages/desserts/Cake2";

import Cake3 from "./pages/desserts/Cake3";


import Header from "./home/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/fast" element={<FastFood />}></Route>

        <Route exact path="/pizza" element={<Pizza />}></Route>

        <Route exact path="/pizza2" element={<Pizza2 />}></Route>

        <Route exact path="/pizza3" element={<Pizza3 />}></Route>

        <Route exact path="/pizza4" element={<Pizza4 />}></Route>

        <Route exact path="/beef-burger" element={<BeefBurger />}></Route>
        <Route exact path="/zinger-burger" element={<ZingerBurger />}></Route>

        <Route exact path="/dishes" element={<MainDishes />}></Route>
        <Route exact path="/pasta" element={<Pasta />}></Route>
        <Route exact path="/pasta2" element={<Pasta2 />}></Route>
        <Route exact path="/pasta3" element={<Pasta3 />}></Route>
        <Route exact path="/grilled-steak" element={<GrilledSteak />}></Route>

        <Route exact path="/drinks" element={<Drinks />}></Route>

        <Route exact path="/juice" element={<Juice />}></Route>

        <Route exact path="/juice2" element={<Juice2 />}></Route>

        <Route exact path="/juice3" element={<Juice3 />}></Route>

        <Route exact path="/juice4" element={<Juice4 />}></Route>

        <Route exact path="/juice5" element={<Juice5 />}></Route>

        <Route exact path="/desserts" element={<Desserts />}></Route>

        <Route exact path="/icecream" element={<Icecream />}></Route>

        <Route exact path="/icecream2" element={<Icecream2 />}></Route>

        <Route exact path="/icecream3" element={<Icecream3 />}></Route>

        <Route exact path="/cake" element={<Cake />}></Route>

        <Route exact path="/cake2" element={<Cake2 />}></Route>

        <Route exact path="/cake3" element={<Cake3 />}></Route>

       

<Route exact path="/menu" element={<Menu />}></Route>


        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          exact
          path="/search"
          element={
            <Search placeholder="enter a product name..."  />
          }
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/update_profile" element={<UpdateProfile />}></Route>
        <Route exact path="/profile" element={<ProfileInformation />}></Route>

        <Route exact path="/checkout" element={<Checkout />}></Route>

        <Route exact path="/login" element={<Login />}></Route>

        
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />


    </div>

    </Router>
  );
}

export default App;
