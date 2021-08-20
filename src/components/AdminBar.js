import React from "react";
import "../styles/AdminBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";

const AdminBar = () => {
  const user = useContext(AuthContext);

  return (
    <div className="Adminbar">
      <ul className="adminbar-links">
        {user.currentUser.userType === "admin" && (
          <li className="adminbar-links-item">
            <Link className="adminitem" to="/admin-tools/add-user">
              Add User
            </Link>
            <Link className="adminitem" to="/admin-tools/edit-users">
              Edit Users
            </Link>
            <Link className="adminitem" to="/admin-tools/add-child">
              Add Child
            </Link>
            <Link className="adminitem" to="/admin-tools/edit-children">
              Edit Children
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AdminBar;
