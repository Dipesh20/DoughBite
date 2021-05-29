import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
function HeroSection() {
  function learnclicked() {
    console.log("learn is called");
    return () => <Link to="/learn-recipe"> </Link>;
  }

  function postClicked() {
    console.log("post is called");
  }
  return (
    <div className="hero-container">
      <video src="/videos/Pexels.mp4" autoPlay loop muted />
      <h1>Grab the Fork & Knife</h1>
      <p>Let's Add More taste today </p>
      <div className="hero-btns">
        {/* onClick={()=><Link to='/blogs' >  </Link>} */}
        <Link to="/learn-recipe">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Learn Recipe
          </Button>
        </Link>
        <Link to="/post-recipe">
          <Button
            onClick={postClicked}
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Post Recipe
            <i className="far fa-play-cirlce" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
