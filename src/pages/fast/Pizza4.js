import React from "react";

import pro6 from "../../../src/assets/pizza-4.png";

import { Link } from "react-router-dom";

function Pizza4() {
  return (
    <>
      <div className="heading">
        <h3>Bacon Pizza</h3>
        <p>
          <Link to="/fast" className="link">
            fast food
          </Link>
          <span> / Pizza 4</span>
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
                <td> precooked pizza crust</td>
              </tr>

              <tr>
                <td> oil</td>
              </tr>

              <tr>
                <td> onions, chopped</td>
              </tr>

              <tr>
                <td> cloves garlic, minced</td>
              </tr>

              <tr>
                <td>flour, freshly ground black pepper</td>
              </tr>

              <tr>
                <td>paprika</td>
              </tr>

              <tr>
                <td>sour cream</td>
              </tr>

              <tr>
                <td>dried thyme leaves, dried marjoram leaves</td>
              </tr>

              <tr>
                <td>shredded cheddar cheese,Muenster cheese</td>
              </tr>

              <tr>
                <td>grated Parmesan cheese</td>
              </tr>

              </tbody>



              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza4;
