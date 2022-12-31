import React from "react";

import pro5 from "../../../src/assets/dessert-5.png";

import { Link } from "react-router-dom";

function Icecream3() {
  return (
    <>
      <div className="heading">
        <h3>Qulfa Icecream</h3>
        <p>
          <Link to="/desserts" className="link">
            Desserts
          </Link>
          <span> / Icecream 3</span>
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
                <td> strawberry</td>
              </tr>

              <tr>
                <td>milk with cream</td>
              </tr>


              <tr>
                <td>saffron</td>
              </tr>

              <tr>
                <td>sugar</td>
              </tr>


              <tr>
                <td> Green cardamoms</td>
              </tr>

              <tr>
                <td>  Almonds (shredded), blanched</td>
              </tr>


              <tr>
                <td> Pachios (shredded)</td>
              </tr>


              <tr>
                <td> Vark leaves</td>
              </tr>

              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icecream3;
