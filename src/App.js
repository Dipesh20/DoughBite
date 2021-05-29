import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./components/pages/Blogs";
import LikedRecipes from "./components/pages/LikedRecipes";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import LearnRecipe from "./components/pages/LearnRecipe.jsx";
import PostRecipe from "./components/pages/PostRecipe.jsx";
// e11b9eff9da5f4df53a44ffb1b5593d9c25a8268
// 47360

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/learn-recipe" component={LearnRecipe} />
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/learn-recipe" component={LearnRecipe} />
          <Route path="/post-recipe" component={PostRecipe} />
          <Route path="/liked-recipes" component={LikedRecipes} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
