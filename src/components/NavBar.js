import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const user = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    user.setCurrentUser("");
    localStorage.removeItem("user");
    user.setAuth(false);
    history.push("/");
  };

  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            <h1 className="cool-meals-title">Cool Dinners</h1>
          </Link>
        </li>
        {(user.currentUser.userType === "canteen" ||
          user.currentUser.userType === "admin") && (
          <li>
            <Link className="item non-home" to="/canteen">
              Canteen
            </Link>
          </li>
        )}
        {(user.currentUser.userType === "admin" ||
          user.currentUser.userType === "teacher") && (
          <li className="navbar-links-item">
            <Link className="item non-home" to="/teachers">
              Teachers
            </Link>
          </li>
        )}
        {user.currentUser.userType === "teacher" && (
          <li className="navbar-links-item">
            <Link className="item non-home" to="/add-child">
              Add Child
            </Link>
          </li>
        )}

        {user.currentUser.userType === "admin" && (
          <li className="navbar-links-item">
            <Link className="item non-home" to="/admin-tools">
              Admin Tools

          <li className="navbar-links-item">
            <Link className="item non-home" to="/add-user">
              Register

            </Link>
          </li>
        {localStorage.getItem("token") && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
        {localStorage.getItem("token") && (
          <li className = "navbar-login">
            <p>You are currently logged in as {user.currentUser.username}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
