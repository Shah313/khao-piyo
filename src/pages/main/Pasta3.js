import React from "react";

import pro3 from "../../../src/assets/dish-3.png";

import { Link } from "react-router-dom";

function Pasta3() {
  return (
    <>
      <div className="heading">
        <h3>Italian Pasta</h3>
        <p>
          <Link to="/dishes" className="link">
            Main Dishes
          </Link>
          <span> / Pasta 3</span>
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
                <td>  extra virgin olive oil</td>
              </tr>

              <tr>
                <td>  garlic cloves</td>
              </tr>

              <tr>
                <td> red chilli flakes</td>
              </tr>

              <tr>
                <td> chopped parsley</td>
              </tr>

              <tr>
                <td>flour, freshly ground black pepper</td>
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
                <td>grated parmesan cheese</td>
              </tr>


              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pasta3;
