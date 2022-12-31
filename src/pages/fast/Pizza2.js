import React from "react";

import pro4 from "../../../src/assets/pizza-2.png";

import { Link } from "react-router-dom";

function Pizza2() {
  return (
    <>
      <div className="heading">
        <h3>Mushroom Pizza </h3>
        <p>
          <Link to="/fast" className="link">
            fast food
          </Link>
          <span> / Pizza 2</span>
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
              
                <td> olive oil</td>
              </tr>

              <tr>
                <td>unsalted butter</td>
              </tr>

              <tr>
                <td>cloves garlic, minced</td>
              </tr>

              <tr>
                <td>cremini mushrooms, thinly sliced </td>
              </tr>

              <tr>
                <td>dried thyme, dried oregano</td>
              </tr>

              <tr>
                <td>Kosher salt and freshly ground black pepper</td>
              </tr>

              <tr>
                <td>yellow cornmeal</td>
              </tr>

              <tr>
                <td>Wisconsin fresh mozzarella cheese</td>
              </tr>

              <tr>
                <td> Wisconsin ricotta cheese</td>
              </tr>

              </tbody>

              </table>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza2;
