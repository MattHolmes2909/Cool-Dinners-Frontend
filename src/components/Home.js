import React, { useState } from "react";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = event => {
    event.preventDefault();
    axios
      .post("https://cool-dinners.herokuapp.com/login", { username, password })
      .then(res => {
        if (!res.data.auth) {
          setLoginStatus(false);
        } else {
          console.log(res.data);
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

  return (
    <div className="Home">
      <p className="welcome">Welcome to Cool Dinners!</p>
      {!loginStatus && (
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
      {loginStatus && (
        <div>
          <h3>You are logged in!</h3>
          <button>Check if authenticated</button>
        </div>
      )}
    </div>
  );
};

export default Home;
