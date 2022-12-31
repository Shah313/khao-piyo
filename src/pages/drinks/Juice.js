import React from "react";

import pro1 from "../../../src/assets/drink-1.png";

import { Link } from "react-router-dom";

function Juice() {
  return (
    <>
      <div className="heading">
        <h3>Orange Juice</h3>
        <p>
          <Link to="/drinks" className="link">
            Drinks
          </Link>
          <span> / Drink 1</span>
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
                  <td>Oranges</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Juice;
