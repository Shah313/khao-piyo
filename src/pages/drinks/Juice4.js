import React from "react";

import pro4 from "../../../src/assets/drink-4.png";

import { Link } from "react-router-dom";

function Juice4() {
  return (
    <>
      <div className="heading">
        <h3>Pomegranate Juice</h3>
        <p>
          <Link to="/drinks" className="link">
            Drinks
          </Link>
          <span> / Drink 4</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro4} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight"> Ingredients</h3>

            <table>

              <tbody>
              <tr>
                <td>Pomegranates</td>
              </tr>

              </tbody>


              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Juice4;
