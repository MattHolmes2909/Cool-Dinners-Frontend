import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react/cjs/react.development";
import "../styles/TeacherView.css";
import moment from "moment";
import axios from "axios";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";

const TeacherView = () => {

  let today = moment().endOf("day");
  let tomorrow;
  if (today.format("dddd").includes("Friday")) {
    tomorrow = moment().add(3, "day").endOf("day");
  } else if (today.format("dddd").includes("Saturday")) {
    tomorrow = moment().add(2, "day").endOf("day");
  } else {
    tomorrow = moment().add(1, "day").endOf("day");
  }

  const user = useContext(AuthContext);

  const [Children, SetChildren] = useState([]);
  const [newOrders] = useState([]);

  useEffect(() => {
    async function fetchChild() {
      await axios
        .get(
          user.currentUser.userType === "admin"
            ? `https://cool-dinners.herokuapp.com/child`
            : `https://cool-dinners.herokuapp.com/child/class/${user.currentUser.schoolClass}`
        )
        .then(response => {
          console.log(response.data);
          SetChildren(response.data);
        })
        .catch(err => console.error(err));
    }
    return fetchChild();
  }, [user.currentUser.schoolClass, user.currentUser.userType]);

  const handleOrders = event => {
    event.preventDefault();
    newOrders.forEach(Child => {
      axios
        .patch(`https://cool-dinners.herokuapp.com/child/${Child.id}`, {
          foodOption: `${Child.foodOption}`,
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => console.error(err));
    });
  };

  const handleFoodChange = event => {
    for (let i = 0; i < newOrders.length; i += 1) {
      if (newOrders[i].id === event.target.name) {
        newOrders.splice([i], [i + 1]);
      }
    }

    newOrders.push({ id: event.target.name, foodOption: event.target.value });
    console.log(newOrders);
  };

  return (
    <div className="TeacherView">
      <p className="order-message">You are ordering dinners for⠀</p>
      <p className="tomorrow">{tomorrow.format("dddd, MMMM Do YYYY")}!</p>
      <form className="order-form" onSubmit={handleOrders}>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th className="schoolclass" name="childName">
                {user.currentUser.userType === "admin"
                  ? `Admin`
                  : user.currentUser.schoolClass}
              </th>
              <th name="pizza">
                <img src={pizza} className="foodicon pizza meat" alt="pizza" />
                Pizza
              </th>
              <th name="pasta">
                <img src={pasta} className="foodicon pasta veg" alt="pasta" />
                Pasta
              </th>
              <th name="fish">
                <img src={fish} className="foodicon pizza fish" alt="fish" />
                Fish and Chips
              </th>
              <th name="quorn">
                <img src={curry} className="foodicon pizza veg" alt="curry" />
                Quorn Curry
              </th>
              <th name="noDinner">
                <img
                  src={noDinner}
                  className="foodicon noDinner"
                  alt="noDinner"
                />
                Dinner not needed
              </th>
            </tr>
          </thead>
          <tbody>
            {Children.map((Child, index) => (
              <tr className="childRow" key={Child.id}>
                <td>
                  <label htmlFor="childName">
                    {user.currentUser.userType === "admin"
                      ? `${Child.childName} (${Child.schoolClass})`
                      : Child.childName}
                  </label>
                </td>
                <td value="pizza">
                  <input
                    type="radio"
                    htmlFor="pizza"
                    title="pizza"
                    name={Child.id}
                    value="pizza"
                    onClick={handleFoodChange}
                    data-id={index}
                    defaultChecked={Child.foodOption === "pizza"}
                  />
                </td>
                <td value="pasta">
                  <input
                    type="radio"
                    htmlFor="pasta"
                    title="pasta"
                    name={Child.id}
                    value="pasta"
                    onClick={handleFoodChange}
                    data-id={index}
                    defaultChecked={Child.foodOption === "pasta"}
                  />
                </td>
                <td value="fish">
                  <input
                    type="radio"
                    htmlFor="fish"
                    title="fish"
                    name={Child.id}
                    value="fish"
                    onClick={handleFoodChange}
                    data-id={index}
                    defaultChecked={Child.foodOption === "fish"}
                  />
                </td>
                <td value="quorn">
                  <input
                    type="radio"
                    htmlFor="quorn"
                    title="quorn"
                    name={Child.id}
                    value="quorn"
                    onClick={handleFoodChange}
                    data-id={index}
                    defaultChecked={Child.foodOption === "quorn"}
                  />
                </td>
                <td value="none">
                  <input
                    type="radio"
                    htmlFor="noDinner"
                    title="noDinner"
                    name={Child.id}
                    value="none"
                    onClick={handleFoodChange}
                    data-id={index}
                    defaultChecked={Child.foodOption === "none"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="order-form-button">
          Done!
        </button>
      </form>
    </div>
  );
};

export default TeacherView;
