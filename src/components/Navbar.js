import React, { useState, useEffect } from "react";

import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import BlogsUpdate from "./pages/BlogsUpdate";

function Navbar(props) {
  // console.log(bcount())
  function showmecount(value) {
    console.log("yess 1");
    console.log(value);

    // return <h1>Hello</h1>
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  {
    /* <BlogsUpdate countSend={showmecount}/> */
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Dough Bite <i className="fas fa-cookie-bite"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blogs
                <span className="nav-item avatar dropdown">
                  <a
                    className="nav-link waves-effect waves-light"
                    id="navbarDropdownMenuLink-5"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i className="fas fa-bell"></i>
                    <span className="badge badge-danger ml-2">0</span>
                  </a>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/liked-recipes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Liked Recipes
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/sign-up">
              <Button buttonStyle="btn--outline">SIGN UP</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
