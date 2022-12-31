import React from "react";

import pro4 from "../../../src/assets/dish-4.png";

import { Link } from "react-router-dom";

import './MainDishes.css'

function GrilledSteak() {
  return (
    <>
      <div className="heading">
        <h3>Grilled Steak</h3>
        <p>
          <Link to="/dishes" className="link">
            Main Dishes
          </Link>
          <span> / Grilled Steak</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro4} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

           <table>

            <tbody>
              <tr>
                <td> beef steaks</td>
              </tr>

              <tr>
                <td> salt</td>
              </tr>

              <tr>
                <td> Black Pepper</td>
              </tr>

              <tr>
                <td> Pasta</td>
              </tr>

              <tr>
                <td>Tomatoes</td>
              </tr>

              <tr>
                <td>Onion</td>
              </tr>

              <tr>
                <td>Lemon</td>
              </tr>

              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrilledSteak;
