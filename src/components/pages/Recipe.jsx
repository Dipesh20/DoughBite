import React, { useState } from "react";
import style from "./recipe.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { makeStyles } from "@material-ui/core/styles";

function Recipe(props) {
  const [Press1, setPress1] = useState(false);
  const [Press2, setPress2] = useState(false);
  const [bookmark, setBookmark] = useState(false);
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
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img src={props.img} className={style.image} alt="recipe" />
    </div>
  );
}
export default Recipe;
