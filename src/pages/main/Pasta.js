import React from "react";

import pro1 from "../../../src/assets/dish-1.png";

import { Link } from "react-router-dom";

function Pasta() {
  return (
    <>
      <div className="heading">
        <h3>Chinese Pasta</h3>
        <p>
          <Link to="/dishes" className="link">
            Main Dishes
          </Link>
          <span> / Pasta 1</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro1} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

           <table>
            <tbody>
              <tr>
                <td>Pasta</td>
              </tr>

              <tr>
                <td> oil</td>
              </tr>

              <tr>
                <td> onions, chopped</td>
              </tr>

              <tr>
                <td>Carrot</td>
              </tr>

              <tr>
                <td>Cabbage</td>
              </tr>

              <tr>
                <td>Soy Sauce as needed</td>
              </tr>

              <tr>
                <td>Salt to taste</td>
              </tr>

              <tr>
                <td>Sugar</td>
              </tr>

              <tr>
                <td>Vinegar as needed</td>
              </tr>

              <tr>
                <td>Black pepper powder to taste</td>
              </tr>

              <tr>
                <td>Chilli flakes to taste</td>
              </tr>

              </tbody>

              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pasta;
