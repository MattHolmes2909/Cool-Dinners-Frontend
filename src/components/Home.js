import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <p className="welcome">Welcome to Cool Dinners!</p>
      <p className="login-message">Please login below:</p>
      <div className="login-form">
        <form>
          <label htmlFor="username" className="login-input">
            Username:{" "}
          </label>
          <input
            className="login-input input"
            type="text"
            placeholder="Your Username"
            name="username"
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
            required
          />
          <br />
          <button type="submit" className="login-form-button">
            Login
          </button>
          <br />
          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              className="login-checkbox"
            />{" "}
            Remember me
          </label>
        </form>
      </div>
    </div>
  );
};

export default Home;
