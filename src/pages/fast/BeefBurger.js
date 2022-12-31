import React from "react";

import pro3 from "../../../src/assets/burger-1.png";

import { Link } from "react-router-dom";

function BeefBurger() {
  return (
    <>
      <div className="heading">
        <h3>Cheesy Hamburger </h3>
        <p>
          <Link to="/fast" className="link">
            fast food
          </Link>
          <span> / Burger 2</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro3} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

            <table>
              <tbody>
              <tr>
                <td>beef </td>
              </tr>

              <tr>
                <td>egg </td>
              </tr>

              <tr>
                <td>minced onion,Tomatoes</td>
              </tr>

              <tr>
                <td>dried bread crumbs </td>
              </tr>

              <tr>
                <td>Worcestershire </td>
              </tr>

              <tr>
                <td>garlic, peeled and minced </td>
              </tr>

              <tr>
                <td>Salt,Black pepper</td>
              </tr>

              <tr>
                <td>mayonnaise,Ketchup </td>
              </tr>

              <tr>
                <td> lettuce leaves, rinsed and crisped </td>
              </tr>

              <tr>
                <td> hamburger buns</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeefBurger;
