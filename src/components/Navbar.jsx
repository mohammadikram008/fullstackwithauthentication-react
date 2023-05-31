import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
        <div className="container-fluid">
          <Link className="link" to="/">
            MernStack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-nav "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/signin">
                  Signin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
