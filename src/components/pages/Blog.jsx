import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "react-bootstrap/Dropdown";

function Recipe(props) {
  const [newComment, addComment] = useState("");

  function commentFed(event) {
    addComment(event.target.value);
  }
  function commentPosted(event) {
    event.preventDefault();
    console.log(newComment);
    if (newComment !== "") {
      const data = {
        _id: props.unique_id,
        comment: newComment,
      };
      Axios.post("http://localhost:4000/app/postComment", data);
      addComment("");
      props.updatePage(!props.updatePageStatus);
    }
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div className={style.recipe}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
      <div>
        <div>
          <Dropdown drop={"down"} menualign="right">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Comments
            </Dropdown.Toggle>

            <Dropdown.Menu className="comment">
              {props.comments.map((comment) => (
                <Dropdown.Item href="#/action-1">
                  {/* <div>
                    <h5 style={{ color: "purple", display: "inline" }}>
                      {comment[1]}
                    </h5>
                    <span>
                      {".      .      ."}
                      {comment[2]}
                    </span>
                  </div> */}
                  <p>{comment}</p>
                </Dropdown.Item>
              ))}

              <form onSubmit={commentPosted}>
                <input
                  style={{
                    width: "70%",
                  }}
                  onChange={commentFed}
                  value={newComment}
                ></input>
                <button
                  type="submit"
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
                >
                  POST
                </button>
              </form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
export default Recipe;
