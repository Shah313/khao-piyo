import React from "react";

import pro5 from "../../../src/assets/pizza-3.png";

import { Link } from "react-router-dom";

function Pizza3() {
  return (
    <>
      <div className="heading">
        <h3>Salami Pizza</h3>
        <p>
          <Link to="/fast" className="link">
            fast food
          </Link>
          <span> / Pizza 3</span>
        </p>
      </div>

      <div className="product-detail">
        <div className="row">
          <div className="image">
            <img src={pro5} alt="" />
          </div>

          <div className="content">
            <h3 className="highlight">Ingredients</h3>

            <table>

              <tbody>
              <tr>
                <td> pizza base</td>
              </tr>

              <tr>
                <td>salt as required</td>
              </tr>

              <tr>
                <td> tomatoes, onion</td>
              </tr>

              <tr>
                <td> salami </td>
              </tr>

              <tr>
                <td>mozzarella</td>
              </tr>

              <tr>
                <td>black pepper as required</td>
              </tr>

              <tr>
                <td> coriander leaves</td>
              </tr>

              <tr>
                <td> butter</td>
              </tr>

              <tr>
                <td> pizza sauce</td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza3;
