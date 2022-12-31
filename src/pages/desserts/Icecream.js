import React from "react";

import pro1 from "../../../src/assets/dessert-1.png";

import { Link } from "react-router-dom";

function Icecream() {
  return (
    <>
      <div className="heading">
        <h3>Strawberry Icecream</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Icecream 1</span>
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
                <td>cream</td>
              </tr>

              <tr>
                <td>strawberries</td>
              </tr>


              <tr>
                <td>honey</td>
              </tr>

              <tr>
                <td>sugar</td>
              </tr>


              <tr>
                <td>vanilla</td>
              </tr>
              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icecream;
