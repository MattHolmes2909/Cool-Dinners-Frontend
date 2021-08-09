import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
  };

  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            <h1 className="cool-meals-title">Cool Dinners!</h1>
          </Link>
        </li>
        {localStorage.getItem("token") && (
          <>
            <li>
              <Link className="item non-home" to="/canteen">
                Canteen
              </Link>
            </li>
            <li className="navbar-links-item">
              <Link className="item non-home" to="/teachers">
                Teachers
              </Link>
            </li>
            <li className="navbar-links-item">
              <Link className="item non-home" to="/add-child">
                Add Child
              </Link>
            </li>
            <li className="navbar-links-item">
              <Link className="item non-home" to="/add-user">
                Add User
              </Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
