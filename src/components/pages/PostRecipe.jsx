import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Axios from "axios";
import "./PostRecipe.css";
function PostRecipe() {
  const [recipetitle, setTitle] = useState();
  const [items, setItems] = useState([]);
  const [posted, setPosted] = useState(false);
  const [color, setColor] = useState("red");
  const [postMessage, setPostMessage] = useState("");
  const [titlebutton, buttonstatus] = useState(false);
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handleTitle(event) {
    const newValue = event.target.value;
    setTitle(newValue);
  }
  const submitButton = () => {
    const posting = {
      title: recipetitle,
      recipelist: items,
    };
    console.log(posting);
    Axios.post("http://localhost:4000/app/postRecipe", posting)
      .then((response) => {
        console.log(response.data);
        setPostMessage("Recipe Posted Successfully!!");
        setColor("green");
        setPosted(true);
        return;
      })
      .catch((err) => {
        console.log(err);
        setPostMessage("Error in Posting!!");
        setColor("red");
        setPostMessage(false);
      });
  };

  return (
    <div className="container">
      <div className="heading">{titlebutton && <h1>{recipetitle}</h1>}</div>
      {!titlebutton && (
        <div className="form">
          <input type="text" onChange={handleTitle} />
          <button
            onClick={() => {
              buttonstatus(!titlebutton);
              setTitle(recipetitle);
            }}
          >
            <span>Add Title</span>
          </button>
        </div>
      )}

      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "300px" }}>
        <input type="file" />
        <button type="submit" onClick={submitButton}>
          <span>SUBMIT</span>
        </button>
      </div>
      {posted && (
        <p style={{ color: color, textAlign: "center" }}>{postMessage}</p>
      )}
    </div>
  );
}

export default PostRecipe;
