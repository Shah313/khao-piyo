import React from "react";

import pro3 from "../../../src/assets/dessert-3.png";

import { Link } from "react-router-dom";

function Icecream2() {
  return (
    <>
      <div className="heading">
        <h3>Vanilla Icecream</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Icecream 2</span>
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
                <td> milk</td>
              </tr>

              <tr>
                <td>corn flour</td>
              </tr>


              <tr>
                <td>fresh cream</td>
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

export default Icecream2;
