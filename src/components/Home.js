import React, { useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import Alert from "./Alert";
import cook from "../images/cook.png";
import teacherImage from "../images/teacher.png";
import adminImage from "../images/admin.png";
import menu from "../images/menu.png";
import foods from "../images/foods.png";
import children from "../images/children.png";

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
    },
  };

  const [alert, setAlert] = useState(initialState.alert);

  const username = user.username;

  const password = user.password;

  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();
    let isPending;
    await axios
      .get("https://cool-dinners.herokuapp.com/register/pending")
      .then(res => {
        const exists = element => element.username === username;
        isPending = res.data.some(exists);
        console.log(res.data);
      });
    if (!isPending) {
      axios
        .post("https://cool-dinners.herokuapp.com/login", {
          username,
          password,
        })
        .then(res => {
          if (!res.data.auth) {
            user.setAuth(false);
            setAlert({ message: "User does not exist", isSuccess: false });
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
    } else {
      setAlert({
        message: "Registration is still pending. Please try again later",
        isSuccess: false,
      });
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
              <Link className="user-register-button" to="add-user">
                {" "}
                Click here!
              </Link>
            </form>
          </div>
        </div>
      )}
      {localStorage.getItem("token") && (
        <div className="loggedInHome">
          <p className="loggedInAs">
            You are logged in as{" "}
            <p className="loggedInAs loggedInAsUser">
              {" "}
              {user.currentUser.username}
            </p>
            ! Please select an option to start:
          </p>
          <ul className="home-links">
            {(user.currentUser.userType === "canteen" ||
              user.currentUser.userType === "admin") && (
              <li className="homelink">
                <Link className="homeitem" to="/canteen">
                  <h3>Canteen View</h3>
                  <p className="homelinkText">
                    Click here to view the latest meal orders that have been
                    sent from classes to the canteen.
                  </p>
                  <img className="homeImage" src={cook} alt="Cook icon" />
                </Link>
              </li>
            )}
            {user.currentUser.userType === "canteen" && (
              <>
                <li className="homelink">
                  <Link className="homeitem" to="/add-menu">
                    <h3>Add Menu Item</h3>
                    <p className="homelinkText">
                      Click here to add a new meal to the menu, including
                      dietary and allergy information.
                    </p>
                    <img className="homeImage" src={foods} alt="Foods icon" />
                  </Link>
                </li>
                <li className="homelink">
                  <Link className="homeitem" to="/edit-menu">
                    <h3>Edit Menu</h3>
                    <p className="homelinkText">
                      Click here to be able to view, edit or delete meal options
                      from the menu and database.
                    </p>
                    <img className="homeImage" src={menu} alt="Menu icon" />
                  </Link>
                </li>
              </>
            )}
            {(user.currentUser.userType === "admin" ||
              user.currentUser.userType === "teacher") && (
              <li className="homelink">
                <Link className="homeitem" to="/teachers">
                  <h3>Teacher View</h3>
                  <p className="homelinkText">
                    Click here to view your class' meal register and order meals
                    from the canteen.
                  </p>
                  <img
                    className="homeImage"
                    src={teacherImage}
                    alt="Teacher icon"
                  />
                </Link>
              </li>
            )}
            {user.currentUser.userType === "teacher" && (
              <li className="homelink">
                <Link className="homeitem" to="/add-child">
                  <h3>Add Child</h3>
                  <p className="homelinkText">
                    Click here to add new children on to your class' meal
                    register, including any allergies.
                  </p>
                  <img
                    className="homeImage"
                    src={children}
                    alt="Children icon"
                  />
                </Link>
              </li>
            )}

            {user.currentUser.userType === "admin" && (
              <li className="homelink">
                <Link className="homeitem" to="/admin-tools">
                  <h3>Admin Tools</h3>
                  <p className="homelinkText">
                    Click here to access the admin tools for adding or editing
                    children, meals and users.
                  </p>
                  <img
                    className="homeImage"
                    src={adminImage}
                    alt="Admin icon"
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
