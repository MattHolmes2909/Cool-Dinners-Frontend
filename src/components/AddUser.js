import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "./Alert"
import axios from "axios";
import "../styles/AddUser.css"

const AddUser = () => {
  const user = useContext(AuthContext);

  const initialState = {
    fields: {
      username: "",
      password: "",
      userType: "teacher",
      schoolClass: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const handleRegister = event => {
    event.preventDefault();
    axios
      .post("https://cool-dinners.herokuapp.com/register", {
        username: fields.username,
        password: fields.password,
        userType: fields.userType,
        schoolClass: fields.schoolClass,
      })
      .then(res => {
        if (fields.password.length < 8) {
          setAlert({ message: "Password must be more than 8 characters", isSuccess: false });
        } else if (!/[A-Z]/.test(fields.password)) {
          setAlert({ message: "Password must contain at least one capital letter", isSuccess: false });
        } else {
          console.log(res);
          setAlert({ message: "User Added", isSuccess: true });
        }
      });
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddUser">
      {user.currentUser.userType === "admin" && (
        <>
          <form onSubmit={handleRegister} className="addUserForm">
            <p className="p-tag-user">Add User</p>
            <div className="form-field">
              <label htmlFor="username" className="type-label">
                Username:
                </label>
                <input
                  name="username"
                  className="register-input"
                  placeholder="Your Username..."
                  value={fields.username}
                  onChange={handleFieldChange}
                  required
                />
            </div>
            <div className="form-user-password">
              <label htmlFor="password" className="type-label">
                Password:
              </label>
              <input
                className="register-input"
                type="password"
                placeholder="Your Password..."
                name="password"
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-user-order">
              User Type
              <label htmlFor="user-type" className="register-label">
                <select
                  id="userType"
                  className="userTypeSelect"
                  name="userType"
                  value={fields.userType}
                  onChange={handleFieldChange}
                  required
                >
                  <option className="teacher userTypeSelect" value="teacher">
                    Teacher
                  </option>
                  <option className="canteen userTypeSelect" value="canteen">
                    Canteen
                  </option>
                </select>
              </label>
            </div>
            {fields.userType === "teacher" && (
              <div className="form-user-class">
                Class
                <label htmlFor="user-class"className="register-label">
                  <select
                    id="schoolClass"
                    className="userClassSelect"
                    name="schoolClass"
                    value={fields.schoolClass}
                    onChange={handleFieldChange}
                  >
                    <option className="1DS userClassSelect" value="1DS">
                      1DS
                    </option>
                    <option className="1MH userClassSelect" value="1MH">
                      1MH
                    </option>
                    <option className="2AW userClassSelect" value="2AW">
                      2AW
                    </option>
                    <option className="2NM userClassSelect" value="2NM">
                      2NM
                    </option>
                  </select>
                </label>
              </div>
            )}
            {fields.userType === "canteen" && (
              <div className="form-user-class">
                Class
                <label htmlFor="user-class" className="register-label">
                  <select
                    id="schoolClass"
                    className="userClassSelect"
                    name="schoolClass"
                    value={fields.schoolClass}
                    onChange={handleFieldChange}
                  >
                    <option className="all userClassSelect" value={null}>
                      All
                    </option>
                  </select>
                </label>
              </div>
            )}
            <button type="submit" className="register-form-button">
              Register
            </button>
            <Alert message={alert.message} success={alert.isSuccess} />
          </form>
        </>
      )}
      {!localStorage.getItem("token") && (
        <>
          <form onSubmit={handleRegister} className="addUserForm">
            <p className="p-tag-user">Add User</p>
            <div className="form-field">
              <label htmlFor="username" className="type-label">
                Username:
                </label>
                <input
                  name="username"
                  className="register-input"
                  placeholder="Your Username..."
                  value={fields.username}
                  onChange={handleFieldChange}
                  required
                />
            </div>
            <div className="form-user-password">
              <label htmlFor="password" className="type-label">
                Password:
              </label>
              <input
                className="register-input"
                type="password"
                placeholder="Your Password..."
                name="password"
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-user-order">
              User Type
              <label htmlFor="user-type" className="register-label">
                <select
                  id="userType"
                  className="userTypeSelect"
                  name="userType"
                  value={fields.userType}
                  onChange={handleFieldChange}
                  required
                >
                  <option className="teacher userTypeSelect" value="teacher">
                    Teacher
                  </option>
                  <option className="canteen userTypeSelect" value="canteen">
                    Canteen
                  </option>
                </select>
              </label>
            </div>
            {fields.userType === "teacher" && (
              <div className="form-user-class">
                Class
                <label htmlFor="user-class"className="register-label">
                  <select
                    id="schoolClass"
                    className="userClassSelect"
                    name="schoolClass"
                    value={fields.schoolClass}
                    onChange={handleFieldChange}
                  >
                    <option className="1DS userClassSelect" value="1DS">
                      1DS
                    </option>
                    <option className="1MH userClassSelect" value="1MH">
                      1MH
                    </option>
                    <option className="2AW userClassSelect" value="2AW">
                      2AW
                    </option>
                    <option className="2NM userClassSelect" value="2NM">
                      2NM
                    </option>
                  </select>
                </label>
              </div>
            )}
            {fields.userType === "canteen" && (
              <div className="form-user-class">
                Class
                <label htmlFor="user-class" className="register-label">
                  <select
                    id="schoolClass"
                    className="userClassSelect"
                    name="schoolClass"
                    value={fields.schoolClass}
                    onChange={handleFieldChange}
                  >
                    <option className="all userClassSelect" value={null}>
                      All
                    </option>
                  </select>
                </label>
              </div>
            )}
            <button type="submit" className="register-form-button">
              Register
            </button>
            <Alert message={alert.message} success={alert.isSuccess} />
          </form>
        </>
      )}
    </div>
  );
};

export default AddUser;
