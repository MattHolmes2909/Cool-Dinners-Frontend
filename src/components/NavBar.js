import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

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
        {(currentUser.userType === "canteen" ||
          currentUser.userType === "admin") && (
          <li>
            <Link className="item non-home" to="/canteen">
              Canteen
            </Link>
          </li>
        )}
        {(currentUser.userType === "admin" ||
          currentUser.userType === "teacher") && (
          <>
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
          </>
        )}
        {currentUser.userType === "admin" && (
          <li className="navbar-links-item">
            <Link className="item non-home" to="/add-user">
              Add User
            </Link>
          </li>
        )}
        <button onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  );
};

export default NavBar;
