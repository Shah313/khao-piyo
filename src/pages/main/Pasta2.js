import React from "react";

import pro2 from "../../../src/assets/dish-2.png";

import { Link } from "react-router-dom";

function Pasta2() {
  return (
    <>
      <div className="heading">
        <h3>Pakistani Pasta</h3>
        <p>
          <Link to="/dishes" className="link">
            Main Dishes
          </Link>
          <span> / Pasta 2</span>
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
                <td> minced beef </td>
              </tr>

              <tr>
                <td>  red onion sliced</td>
              </tr>

              <tr>
                <td>  garlic ginger paste</td>
              </tr>

              <tr>
                <td> large tomatoes chopped </td>
              </tr>

              <tr>
                <td> salt,red chilli powder</td>
              </tr>

              <tr>
                <td>red chili flakes </td>
              </tr>

              <tr>
                <td> turmeric powder</td>
              </tr>

              <tr>
                <td>coriander powder</td>
              </tr>

              <tr>
                <td>grounded cumin seeds</td>
              </tr>

              <tr>
                <td> garam masala powder</td>
              </tr>

              </tbody>

              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pasta2;
