import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="Navbar">
            <ul className="navbar-links">
                <li className="navbar-links-item">
                    <Link className="item" to="/canteen">
                        Canteen
                    </Link>
                </li>
                <li className="navbar-links-item">
                    <Link className="item" to="/teachers">
                        Teachers
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
