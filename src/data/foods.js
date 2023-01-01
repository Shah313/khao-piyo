
import { BrowserRouter as Route} from "react-router-dom"

// product route link
import Pizza from "../pages/fast/Pizza";
import Pizza2 from "../pages/fast/Pizza2";

import Pizza3 from "../pages/fast/Pizza3";

import Pizza4 from "../pages/fast/Pizza4";

import ZingerBurger from "../pages/fast/ZingerBurger";

import BeefBurger from "../pages/fast/BeefBurger";


import Pasta from "../pages/main/Pasta";

import Pasta2 from "../pages/main/Pasta2";

import Pasta3 from "../pages/main/Pasta3";

import GrilledSteak from "../pages/main/GrilledSteak";


import Juice from "../pages/drinks/Juice";

import Juice2 from "../pages/drinks/Juice2";

import Juice3 from "../pages/drinks/Juice3";

import Juice4 from "../pages/drinks/Juice4";

import Juice5 from "../pages/drinks/Juice5";



import Icecream from "../pages/desserts/Icecream";

import Icecream2 from "../pages/desserts/Icecream2";

import Icecream3 from "../pages/desserts/Icecream3";

import Cake from "../pages/desserts/Cake";

import Cake2 from "../pages/desserts/Cake2";

import Cake3 from "../pages/desserts/Cake3";

// product route link

//category route link

import FastFood from "../pages/fast/FastFood";

import MainDishes from "../pages/main/MainDishes";

import Drinks from "../pages/drinks/Drinks";

import Desserts from "../pages/desserts/Desserts";

//category route link










//category route link

// product picture link
import pro1 from "../assets/pizza-1.png";

import pro2 from "../assets/dish-1.png";

import pro3 from "../assets/burger-1.png";

import pro4 from "../assets/dessert-1.png";

import pro5 from "../assets/drink-2.png";

import pro6 from "../assets/dish-4.png";

import pro7 from "../assets/dessert-2.png";

import pro8 from "../assets/burger-2.png";

import pro9 from "../assets/drink-4.png";

import pro10 from "../assets/pizza-2.png";

import pro11 from "../assets/pizza-3.png";

import pro12 from "../assets/pizza-4.png";

import pro13 from "../assets/dish-2.png";

import pro14 from "../assets/dish-3.png";

import pro15 from "../assets/drink-1.png";

import pro16 from "../assets/drink-3.png";

import pro17 from "../assets/drink-5.png";

import pro18 from "../assets/dessert-3.png";

import pro19 from "../assets/dessert-4.png";

import pro20 from "../assets/dessert-5.png";

import pro21 from "../assets/dessert-6.png";

// product picture link






export const Foods = [
  {
    id: 1,
    food_image: pro1,
    food_name: "Chilli Pepper Pizza",
    food_category: "Fast Food",
    price: "3",
    route: <Route exact path="/pizza" element={<Pizza />}></Route>,
    caroute:
    <Route exact path="/fast" element={<FastFood />}></Route>

    
  },
  {
    id: 2,
    food_image: pro2,
    food_name: "Chinese Pasta",
    food_category: "Main Dishes",
    price: "3",
    route:<Route exact path="/pasta" element={<Pasta />}></Route>,
    caroute:<Route exact path="/dishes" element={<MainDishes />}></Route>


  },
  {
    id: 3,
    food_image: pro17,
    food_name: "Strawberry Juice",
    food_category: "Drinks",
    price: "9",
    route:<Route exact path="/juice5" element={<Juice5 />}></Route>,
    
   caroute:<Route exact path="/drinks" element={<Drinks />}></Route>
    
  },
  {
    id: 4,
    food_image: pro4,
    food_name: "Strawberry Icecream",
    food_category: "Desserts",
    price: "3",
    route:  <Route exact path="/icecream" element={<Icecream />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>

  },
  {
    id: 5,
    food_image: pro12,
    food_name: "Bacon Pizza",
    food_category: "Fast Food",
    price: "3",
    route: <Route exact path="/pizza4" element={<Pizza4 />}></Route>,
    caroute:
    <Route exact path="/fast" element={<FastFood />}></Route>
  },
  {
    id: 6,
    food_image: pro6,
    food_name: "Grilled Steak",
    food_category: "Main Dishes",
    price: "3",
    route: <Route exact path="/grilled-steak" element={<GrilledSteak />}></Route>,
    caroute:<Route exact path="/dishes" element={<MainDishes />}></Route>
  },
  {
    id: 7,
    food_image: pro15,
    food_name: "Orange Juice",
    food_category: "Drinks",
    price: "3",
    route:<Route exact path="/juice" element={<Juice />}></Route>,
    caroute:<Route exact path="/drinks" element={<Drinks />}></Route>
  },
  {
    id: 8,
    food_image: pro7,
    food_name: "Blackout Cake",
    food_category: "Desserts",
    price: "15",
    route:<Route exact path="/cake" element={<Cake />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>
  },
  {
    id: 9,
    food_image: pro8,
    food_name: "Zinger Burger",
    food_category: "Fast Food",
    price: "3",
    route: <Route exact path="/zinger-burger" element={<ZingerBurger />}></Route>,
    caroute:<Route exact path="/fast" element={<FastFood />}></Route>
  },
  {
    id: 10,
    food_image: pro14,
    food_name: "Italian Pasta",
    food_category: "Main Dishes",
    price: "12",
    route: <Route exact path="/pasta3" element={<Pasta3 />}></Route>,
    caroute:<Route exact path="/dishes" element={<MainDishes />}></Route>
  },
  {
    id: 11,
    food_image: pro5,
    food_name: "Black Coffee",
    food_category: "Drinks",
    price: "3",
    route:  <Route exact path="/juice2" element={<Juice2 />}></Route>,
    caroute:<Route exact path="/drinks" element={<Drinks />}></Route>
  },
  {
    id: 12,
    food_image: pro18,
    food_name: "Vanilla Icecream",
    food_category: "Desserts",
    price: "13",
    route:
    <Route exact path="/icecream2" element={<Icecream2 />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>
  },
  {
    id: 13,
    food_image: pro10,
    food_name: "Mashroom Pizza",
    food_category: "Fast Food",
    price: "7",
    route:  <Route exact path="/pizza2" element={<Pizza2 />}></Route>,
    caroute: <Route exact path="/fast" element={<FastFood />}></Route>
  },
  {
    id: 14,
    food_image: pro13,
    food_name: "Pakistani Pasta",
    food_category: "Main Dishes",
    price: "5",
    route: <Route exact path="/pasta2" element={<Pasta2 />}></Route>,
    caroute:<Route exact path="/dishes" element={<MainDishes />}></Route>
  },
  {
    id: 15,
    food_image: pro9,
    food_name: "Pomegranate Juice",
    food_category: "Drinks",
    price: "7",
    route: <Route exact path="/juice4" element={<Juice4 />}></Route>,
    caroute:<Route exact path="/drinks" element={<Drinks />}></Route>
  },
  {
    id: 16,
    food_image: pro19,
    food_name: "Black Muffin Cake",
    food_category: "Desserts",
    price: "5",
    route:   <Route exact path="/cake2" element={<Cake2 />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>
  },
  {
    id: 17,
    food_image: pro11,
    food_name: "Salami Pizza",
    food_category: "Fast Food",
    price: "10",
    route:<Route exact path="/pizza3" element={<Pizza3 />}></Route>,
    caroute:<Route exact path="/fast" element={<FastFood />}></Route>,
    
  },
  {
    id: 18,
    food_image: pro20,
    food_name: "Qulfa Icecream",
    food_category: "Desserts",
    price: "9",
    route: <Route exact path="/icecream3" element={<Icecream3 />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>
  },
  {
    id: 19,
    food_image: pro3,
    food_name: "chezzy hamburger",
    food_category: "Fast Food",
    price: "3",
    route:  <Route exact path="/beef-burger" element={<BeefBurger />}></Route>,
    caroute:<Route exact path="/fast" element={<FastFood />}></Route>
  },
  {
    id: 20,
    food_image: pro21,
    food_name: "Cheese Cake with Strawberry",
    food_category: "Desserts",
    price: "7",
    route:    <Route exact path="/cake3" element={<Cake3 />}></Route>,
    caroute:<Route exact path="/desserts" element={<Desserts />}></Route>
  },
  {
    id: 21,
    food_image: pro16,
    food_name: "Lemon Soda",
    food_category: "Drinks",
    price: "2",
    route:<Route exact path="/juice3" element={<Juice3 />}></Route>,
    caroute:<Route exact path="/drinks" element={<Drinks />}></Route>
  }
 
];
