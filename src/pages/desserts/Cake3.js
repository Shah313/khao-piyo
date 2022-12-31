import React from "react";

import pro6 from "../../../src/assets/dessert-6.png";

import { Link } from "react-router-dom";

function Cake3() {
  return (
    <>
      <div className="heading">
        <h3>Cheese Cake with Strawberry</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Cake 3</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro6} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

           <table>

            <tbody>
              <tr>
                <td>strawberries</td>
              </tr>

              <tr>
                <td>Block cream cheese</td>
              </tr>

              <tr>
                <td>sugar</td>
              </tr>

              <tr>
                <td>sour cream</td>
              </tr>

              <tr>
                <td>vanilla flavour</td>
              </tr>

              <tr>
                <td>eggs</td>
              </tr>

              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cake3;
