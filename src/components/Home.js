import React from "react";
import axios from "axios";
import "../styles/Home.css";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const user = useContext(AuthContext);

  const handleUsernameChange = event => {
    user.setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    user.setPassword(event.target.value);
  };

  const username = user.username;

  const password = user.password;

  const history = useHistory();

  const handleLogin = event => {
    event.preventDefault();
    axios
      .post("https://cool-dinners.herokuapp.com/login", { username, password })
      .then(res => {
        if (!res.data.auth) {
          user.setAuth(false);
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          user.setCurrentUser(JSON.parse(localStorage.getItem("user")));
          console.log(user.currentUser);
          user.setAuth(true);
          history.push("/");
          user.setUsername("");
          user.setPassword("");
        }
      });
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
        window.location.reload();
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
                value={user.username}
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
                value={user.password}
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
          <h3>You are logged in as {user.currentUser.username}!</h3>
          <button onClick={handleUserAuthenticated}>
            Check if authenticated
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
