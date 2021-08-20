import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import "../styles/EditUsers.css";

const EditUser = () => {
  const user = useContext(AuthContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      await axios
        .get(`https://cool-dinners.herokuapp.com/users`)
        .then(response => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch(err => console.error(err));
    }
    return fetchUser();
  }, [user.currentUser.schoolClass, user.currentUser.userType]);

  const handleDelete = async event => {
    event.preventDefault();
    await axios
      .delete(`https://cool-dinners.herokuapp.com/users/${event.target.value}`)
      .then(response => {
        console.log(response.data);
        console.log("User deleted!");
      })
      .catch(err => console.error(err));
    await axios
      .get(`https://cool-dinners.herokuapp.com/users`)
      .then(response => {
        setUsers(response.data);
      });
  };

  return (
    <div className="EditUsers">
      {user.currentUser.userType === "admin" && (
        <>
          <table className="table table-responsive">
            <thead>
              <tr className="usersHead">
                <th className="usersUsername" name="username">
                  Username
                </th>
                <th className="userSchoolClass" name="schoolClass">
                  School Class
                </th>
                <th className="userType" name="userType">
                  User Type
                </th>
                <th className="deleteUser" name="deleteUser">
                  Delete User
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((User, index) => (
                <tr className="userRow" key={User.id}>
                  <td>
                    <label htmlFor="username">{User.username}</label>
                  </td>
                  <td>
                    <label htmlFor="schoolClass">{User.schoolClass}</label>
                  </td>
                  <td>
                    <label htmlFor="userType">{User.userType}</label>
                  </td>
                  <td>
                    {User.userType !== "admin" && (
                      <button
                        type="submit"
                        className="delete-button"
                        value={User.id}
                        onClick={handleDelete}
                      >
                        X
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default EditUser;
