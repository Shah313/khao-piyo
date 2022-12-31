import React from "react";

import pro2 from "../../../src/assets/burger-2.png";

import { Link } from "react-router-dom";

function ZingerBurger() {
  return (
    <>
      <div className="heading">
        <h3>Zinger Burger </h3>
        <p>
          <Link to="/fast" className="link">
            fast food
          </Link>
          <span> / Burger 1</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro2} alt="" />
          </div>


          <div className="content">
            <h3 className="highlight">Ingredients</h3>
           

           <table>
            <tbody>
              <tr>
                <td>Chicken Breast 1</td>
              </tr>

              <tr>
                <td>Burger bun 2 </td>
              </tr>

              <tr>
                <td>Onion,Tomatoes</td>
              </tr>

              <tr>
                <td>Mayonnaise</td>
              </tr>

              <tr>
                <td>Salt</td>
              </tr>

              <tr>
                <td>red chitr </td>
              </tr>

              <tr>
                <td>Egg </td>
              </tr>

              <tr>
                <td>Salad leave </td>
              </tr>

              <tr>
                <td>Black pepper,White pepper </td>
              </tr>

              <tr>
                <td>Corn flour,Plain flour,Baking powder</td>
              </tr>
              </tbody>
              </table>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default ZingerBurger;
