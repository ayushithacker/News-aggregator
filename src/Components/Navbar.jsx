import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div classeName="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            NewsHub
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/technology">
                  Technology
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/entertainment">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
