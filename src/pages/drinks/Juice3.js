import React from "react";

import pro3 from "../../../src/assets/drink-3.png";

import { Link } from "react-router-dom";

function Juice3() {
  return (
    <>
      <div className="heading">
        <h3>Lemon Soda</h3>
        <p>
          <Link to="/drinks" className="link">
            Drinks
          </Link>
          <span> / Drink 3</span>
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
                <td>Lemons</td>
              </tr>
              </tbody>
             
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Juice3;
