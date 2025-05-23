import React from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
           GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li>
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              </li>
              <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              </li>
              <li>
              <Link className="nav-link" to="/createuser">
                SignUp
              </Link>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
