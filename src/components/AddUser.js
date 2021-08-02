import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
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
        console.log(res);
      });
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddUser">
      <form onSubmit={handleRegister} className="form">
        <p>Add User</p>
        <div className="form-field">
          <label htmlFor="username">
            User Name:
            <input
              name="username"
              value={fields.username}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <div className="form-user-password">
          <label htmlFor="password" className="register-input">
            Password:
          </label>
          <input
            className="register-input input"
            type="password"
            placeholder="Your Password"
            name="password"
            onChange={handleFieldChange}
            required
          />
        </div>
        <div className="form-user-order">
          User Type
          <label htmlFor="user-type">
            <select
              id="userType"
              name="userType"
              value={fields.userType}
              onChange={handleFieldChange}
              required
            >
              <option className="teacher" value="teacher">
                Teacher
              </option>
              <option className="canteen" value="canteen">
                Canteen
              </option>
            </select>
          </label>
        </div>
        {fields.userType === "teacher" && (
          <div className="form-user-class">
            Class
            <label htmlFor="user-class">
              <select
                id="schoolClass"
                name="schoolClass"
                value={fields.schoolClass}
                onChange={handleFieldChange}
              >
                <option className="1DS" value="1DS">
                  1DS
                </option>
                <option className="1MH" value="1MH">
                  1MH
                </option>
                <option className="2AW" value="2AW">
                  2AW
                </option>
                <option className="2NM" value="2NM">
                  2NM
                </option>
              </select>
            </label>
          </div>
        )}
        {fields.userType === "canteen" && (
          <div className="form-user-class">
            Class
            <label htmlFor="user-class">
              <select
                id="schoolClass"
                name="schoolClass"
                value={fields.schoolClass}
                onChange={handleFieldChange}
              >
                <option className="all" value={null}>
                  All
                </option>
              </select>
            </label>
          </div>
        )}
        <button type="submit" className="register-form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddUser;
