import React from "react";

import pro5 from "../../../src/assets/drink-5.png";

import { Link } from "react-router-dom";

function Juice5() {
  return (
    <>
      <div className="heading">
        <h3>Strawberry Juice</h3>
        <p>
          <Link to="/drinks" className="link">
            Drinks
          </Link>
          <span> / Drink 5</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro5} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

           <table>

            <tbody>
              <tr>
                <td>Oranges</td>
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
                <td>Black Pepper powder to taste</td>
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

export default Juice5;
