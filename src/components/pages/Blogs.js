import React from "react";
import _ from "lodash";
import { useState, useEffect } from "react";
import Axios from "axios";
import Blog from "./Blog";
import "../../App.css";
//////css for blog elements

function Blogs() {
  var [search, searchState] = useState("");
  var [blogs, setBlogs] = useState([]);
  var [blogsPresent, setBlogsPresent] = useState(false);
  var [updateBlogs, setUpdateBlogs] = useState(false);
  function getSearch() {
    return {};
  }
  function updateSearch(event) {
    searchState(event.target.value);
  }

  useEffect(() => {
    console.log("updating", updateBlogs);
    Axios.request({
      method: "GET",
      url: `http://localhost:4000/app/getRecipe`,
    })
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
        setBlogsPresent(true);
      })
      .catch((err) => {});
  }, [updateBlogs]);

  return (
    <div
      className="blogs"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      }}
    >
      <form onSubmit={getSearch}>
        <input
          style={{
            width: "50%",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginTop: "12px",
          }}
          onChange={updateSearch}
          type="text"
          value={search}
        ></input>
        <button
          style={{
            fontWeight: "900",
            border: "none",
            color: "black",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "13px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="recipeClass">
        {blogsPresent &&
          blogs.map((recipe) => (
            <Blog
              key={recipe._id}
              title={recipe.recipeName}
              ingredients={recipe.steps}
              unique_id={recipe._id}
              updatePage={setUpdateBlogs}
              updatePageStatus={updateBlogs}
              comments={recipe.comments}
            />
          ))}
      </div>
    </div>
  );
}

export default Blogs;
