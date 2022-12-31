import React from "react";

import pro4 from "../../../src/assets/dessert-4.png";

import { Link } from "react-router-dom";

function Cake2() {
  return (
    <>
      <div className="heading">
        <h3>Black Muffin Cake</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Cake 2</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro4} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

            <table>

              <tbody>
              <tr>
                <td>baking powder,baking soda</td>
              </tr>

              <tr>
                <td>flour</td>
              </tr>

              <tr>
                <td>milk</td>
              </tr>

              <tr>
                <td>molasses</td>
              </tr>

              <tr>
                <td>salt,sugar</td>
              </tr>

              <tr>
                <td> water</td>
              </tr>

              <tr>
                <td>whole-wheat flour</td>
              </tr>

              <tr>
                <td> cherry</td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cake2;
