import { useState } from "react";

import { Foods } from "../../data/foods";

import "./Search.css";

import { Link } from "react-router-dom";

import Table from "./Table";

function Search() {
  const [query, setQuery] = useState("");
  const keys = ["food_name", "food_category", "price"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="heading">
        <h3>Search Our All Menues</h3>
        <p>
          <Link to="/" className="link">
            Home
          </Link>
          <span> / Menues</span>
        </p>
      </div>

      <section className="search-form">
        <form action="" method="post">
          <input
            type="text"
            className="box"
            name="search_box"
            placeholder="search food here..."
            maxLength="100"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button
            type="submit"
            className="fas fa-search"
            name="search_btn"
          ></button>
        </form>
        {<Table data={search(Foods)} />}
      </section>
    </>
  );
}

export default Search;
