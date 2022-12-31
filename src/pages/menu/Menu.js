import React from "react";

import pro1 from "../../assets/pizza-1.png";

import pro2 from "../../assets/dish-1.png";

import pro3 from "../../assets/burger-1.png";

import pro4 from "../../assets/dessert-1.png";

import pro5 from "../../assets/drink-2.png";

import pro6 from "../../assets/dish-4.png";

import pro7 from "../../assets/dessert-2.png";

import pro8 from "../../assets/burger-2.png";

import pro9 from "../../assets/drink-4.png";

import pro10 from "../../assets/pizza-2.png";

import pro11 from "../../assets/pizza-3.png";

import pro12 from "../../assets/pizza-4.png";

import pro13 from "../../assets/dish-2.png";

import pro14 from "../../assets/dish-3.png";

import pro15 from "../../assets/drink-1.png";

import pro16 from "../../assets/drink-3.png";

import pro17 from "../../assets/drink-5.png";

import pro18 from "../../assets/dessert-3.png";

import pro19 from "../../assets/dessert-4.png";

import pro20 from "../../assets/dessert-5.png";

import pro21 from "../../assets/dessert-6.png";

import { Link } from "react-router-dom";


import './Menu.css'

function Menu() {
  return (
    <>
      <div className="heading">
        <h3>Search Our All Menues</h3>
        <p>
          <Link to="/" className="link">
            Home
          </Link>
          <span> / Menues</span>
        </p>
      </div>

      <section className="products">
        <div className="box-container">
          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pizza">
              {" "}
            </Link>

            
            <img src={pro1} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">Chilli Pepper Pizza</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pasta"></Link>
            
            <img src={pro2} alt="" />
            <div className="cat">
              <Link to="/dishes" className="link">
                Main Dishes
              </Link>
            </div>
            <div className="name">Chinese Pasta</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/juice5"></Link>
            
            <img src={pro17} alt="" />
            <div className="cat">
              <Link to="/drinks" className="link">
                Drinks
              </Link>
            </div>

            <div className="name">Strawberry Juice</div>

            <div className="flex">
              <div className="price">
                <span>$</span>9<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/icecream"></Link>
            
            <img src={pro4} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Strawberry Icecream</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

      

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pizza4"></Link>
            
            <img src={pro12} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">Bacon Pizza</div>

            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/grilled-steak"></Link>
            
            <img src={pro6} alt="" />
            <div className="cat">
              <Link to="/dishes" className="link">
                Main Dishes
              </Link>
            </div>
            <div className="name">Grilled Steak</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/juice">
              {" "}
            </Link>

            
            <img src={pro15} alt="" />
            <div className="cat">
              <Link to="/drinks" className="link">
                Drinks
              </Link>
            </div>
            <div className="name">Orange Juice</div>

            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/cake"></Link>
            
            <img src={pro7} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Blackout Cake</div>

            <div className="flex">
              <div className="price">
                <span>$</span>15<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="zinger-burger"></Link>
            
            <img src={pro8} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">Zinger Burger</div>

            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pasta3"></Link>
            
            <img src={pro14} alt="" />
            <div className="cat">
              <Link to="/dishes" className="link">
                Main Dishes
              </Link>
            </div>
            <div className="name">Italian Pasta</div>

            <div className="flex">
              <div className="price">
                <span>$</span>12<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/juice2"></Link>
            
            <img src={pro5} alt="" />
            <div className="cat">
              <Link to="/drinks" className="link">
                Drinks
              </Link>
            </div>
            <div className="name">Black Coffee</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/icecream2"></Link>
            
            <img src={pro18} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Vanilla Icecream</div>

            <div className="flex">
              <div className="price">
                <span>$</span>13<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pizza2"></Link>
            
            <img src={pro10} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">Mashroom Pizza</div>

            <div className="flex">
              <div className="price">
                <span>$</span>7<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          
          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pasta2"></Link>
            
            <img src={pro13} alt="" />
            <div className="cat">
              <Link to="/dishes" className="link">
                Main Dishes
              </Link>
            </div>
            <div className="name">Pakistani Pasta</div>

            <div className="flex">
              <div className="price">
                <span>$</span>5<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="juice4"></Link>
            
            <img src={pro9} alt="" />
            <div className="cat">
              <Link to="/drinks" className="link">
                Drinks
              </Link>
            </div>
            <div className="name">Pomegranate Juice</div>

            <div className="flex">
              <div className="price">
                <span>$</span>7<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/cake2"></Link>
            
            <img src={pro19} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Black Muffin Cake</div>

            <div className="flex">
              <div className="price">
                <span>$</span>5<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>


         

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/pizza3"></Link>
            
            <img src={pro11} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">Salami Pizza</div>

            <div className="flex">
              <div className="price">
                <span>$</span>10<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

         

          

          
          

         
          

         

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/icecream3"></Link>
            
            <img src={pro20} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Qulfa Icecream</div>

            <div className="flex">
              <div className="price">
                <span>$</span>9<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/beef-burger"></Link>
            
            <img src={pro3} alt="" />
            <div className="cat">
              <Link to="/fast" className="link">
                Fast Food
              </Link>
            </div>
            <div className="name">chezzy hamburger</div>
            <div className="flex">
              <div className="price">
                <span>$</span>3<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>


          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/cake3"></Link>
            
            <img src={pro21} alt="" />
            <div className="cat">
              <Link to="/desserts" className="link">
                Desserts
              </Link>
            </div>
            <div className="name">Cheese Cake with Strawberry</div>

            <div className="flex">
              <div className="price">
                <span>$</span>7<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>

          <form accept="" method="post" className="box">
            <Link className="fas fa-eye" to="/juice3"></Link>
            
            <img src={pro16} alt="" />
            <div className="cat">
              <Link to="/drinks" className="link">
                Drinks
              </Link>
            </div>
            <div className="name">Lemon Soda</div>

            <div className="flex">
              <div className="price">
                <span>$</span>2<span>/-</span>
              </div>
              <input
                type="number"
                name="qty"
                className="qty"
                min="1"
                max="99"
                placeholder='0'
              />
            </div>
          </form>
        </div>
      </section>

     
    </>
  );
}

export default Menu;
