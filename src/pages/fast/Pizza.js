import React from "react";

import pro1 from "../../../src/assets/pizza-1.png";

import { Link } from "react-router-dom";

import './FastFood.css'

function Pizza() {
  return (
    <>
      <div className="heading">
        <h3>Chilli Pepper Sauce Pizza </h3>
        <p>
          <Link to="/fast" className="link">
            Fast Food{" "}
          </Link>{" "}
          <span> / Pizza 1</span>
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
        <tr >
          <td>1 (28 Oz.) Can Tomato Puree</td>
        </tr>
        <tr>
          <td>2 Cloves Garlic, minced</td>
        </tr>
        <tr>
          <td>4 Leaves Fresh Basil, chopped</td>
        </tr>
        <tr>
          <td>2 Sprigs Oregano, chopped</td>
        </tr>
        <tr>
          <td>1 Tablespoon Crushed Red Pepper Extra Hot</td>
        </tr>
        <tr>
          <td>Kosher Sea Salt Flakes</td>
        </tr>
        <tr>
          <td>Fine Ground Black Pepper</td>
        </tr>
        <tr>
          <td>3 Tablespoons Olive Oil</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </>
  );
}

export default Pizza;
