import React from "react";

import pro2 from "../../../src/assets/drink-2.png";

import { Link } from "react-router-dom";

function Juice2() {
  return (
    <>
      <div className="heading">
        <h3>Black Coffee</h3>
        <p>
          <Link to="/drinks" className="link">
            Drinks
          </Link>
          <span> / Drink 2</span>
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
                <td>coffee powder</td>
              </tr>

              <tr>
                <td>milk</td>
              </tr>

              <tr>
                <td> sugar</td>
              </tr>

              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Juice2;
