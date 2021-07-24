import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <p className="welcome">Welcome to Cool Dinners!</p>
      <p className="login-message">Please login below:</p>
      <div class="login-form">
        <form>
          <label for="username">Username: </label>
          <input
            type="text"
            placeholder="Your Username"
            name="username"
            required
          />
          <br />
          <label for="password">Password: </label>
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            required
          />
          <br />
          <button type="submit">Login</button>
          <br />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </form>
      </div>
    </div>
  );
};

export default Home;
