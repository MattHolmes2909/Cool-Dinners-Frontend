import React, {useState} from "react";
import axios from "axios";
import "../styles/Home.css";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import Alert from "./Alert";

const Home = () => {
  const user = useContext(AuthContext);

  const handleUsernameChange = event => {
    user.setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    user.setPassword(event.target.value);
  };

  const initialState = {
    alert: {
    message: "",
    isSuccess: false,
  }
  }

  const [alert, setAlert] = useState(initialState.alert)

  const username = user.username;

  const password = user.password;

  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();
    let isPending;
    await axios
      .get("https://cool-dinners.herokuapp.com/register/pending")
      .then(res => {
      const exists = (element) => element.username === username;
      isPending = res.data.some(exists)
      console.log(res.data)
      })
      if (!isPending) {
        axios
        .post("https://cool-dinners.herokuapp.com/login", { username, password })
        .then(res => {
          if (!res.data.auth) {
            user.setAuth(false);
            setAlert({ message: "User does not exist", isSuccess: false })
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
          }
        ); 
      } else {
        setAlert({ message: "Registration is still pending. Please try again later", isSuccess: false })
      }
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
                placeholder="Your Username..."
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
                placeholder="Your Password..."
                name="password"
                value={user.password}
                onChange={handlePasswordChange}
                required
              />
              <br />
              <button type="submit" className="login-form-button">
                Login
              </button>
              <Alert message={alert.message} success={alert.isSuccess} />
              <br />
            </form>
            <form>
            <label htmlFor="register" className="user-register-label">
                Not already registered?
              </label>
              <Link className="user-register-button" to="add-user">    Click here!</Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
