import React from "react";

import pro2 from "../../../src/assets/dessert-2.png";

import { Link } from "react-router-dom";

function Cake() {
  return (
    <>
      <div className="heading">
        <h3>Blackout Cake</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Cake 1</span>
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
                <td>unsalted butter</td>
              </tr>

              <tr>
                <td>cocoa powder</td>
              </tr>


              <tr>
                <td>all-purpose flour</td>
              </tr>

              <tr>
                <td> baking soda, baking powder</td>
              </tr>


              <tr>
                <td>egg,egg yolk</td>
              </tr>

              
              <tr>
                <td>dark brown sugar</td>
              </tr>


              
              <tr>
                <td> sour cream</td>
              </tr>


              
              <tr>
                <td>vegetable oil</td>
              </tr>

              <tr>

                <td> vanilla extract,kosher salt</td>


              </tr>

              </tbody>

              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cake;
