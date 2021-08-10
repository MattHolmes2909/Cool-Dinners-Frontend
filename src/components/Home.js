import React, { useState } from "react";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  const handleLogin = event => {
    event.preventDefault();
    axios
      .post("https://cool-dinners.herokuapp.com/login", { username, password })
      .then(res => {
        if (!res.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(currentUser);
          setLoginStatus(true);
        }
      });
  };

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleUserAuthenticated = event => {
    event.preventDefault();
    axios
      .get("https://cool-dinners.herokuapp.com/login/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div className="Home">
      <p className="welcome">Welcome to Cool Dinners!</p>
      {!localStorage.getItem("token") && (
        <div>
          <p className="login-message">Please login below:</p>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label htmlFor="username" className="login-input">
                Username:{" "}
              </label>
              <input
                className="login-input input"
                type="text"
                placeholder="Your Username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <br />
              <label htmlFor="password" className="login-input">
                Password:{" "}
              </label>
              <input
                className="login-input input"
                type="password"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <br />
              <button type="submit" className="login-form-button">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      {localStorage.getItem("token") && (
        <div>
          <h3>You are logged in as {currentUser.username}!</h3>
          <button onClick={handleUserAuthenticated}>
            Check if authenticated
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
