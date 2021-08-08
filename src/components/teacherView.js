import React,{ useEffect, useState } from "react";
import "../styles/TeacherView.css";
import moment from "moment";
import axios from "axios";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";

const TeacherView = () => {
  let tomorrow;
  if (moment().add(1, "day").endOf("day").format("dddd") === "Saturday") {
    tomorrow = moment().add(3, "day").endOf("day");
  }
  if (moment().add(1, "day").endOf("day").format("dddd") === "Sunday") {
    tomorrow = moment().add(2, "day").endOf("day");
  } else {
    tomorrow = moment().add(1, "day").endOf("day");
  }

const [Children, SetChildren] = useState([]);

useEffect(() => {
  async function fetchChild() {
    await axios
      .get("https://cool-dinners.herokuapp.com/child/class/1DS")
      .then(response => {console.log(response.data)
      SetChildren(response.data)
      console.log(Children);
      })
      .catch(err => console.error(err));
  }
  return fetchChild();
}, [Children]);

  return (
    <div className="TeacherView">
      <p className="order-message">You are ordering dinners for⠀</p>
      <p className="tomorrow">{tomorrow.format("dddd, MMMM Do YYYY")}!</p>
      <form className="order-form">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th className="schoolclass" name="childName">
                1DS
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
            {Children.map((Child) => (<tr className="childRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="childName">{Child.childName}</label>
                </div>
              </td>
              <td>
                <input
                  type="radio"
                  htmlFor="pizza"
                  title="pizza"
                  name="child1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  htmlFor="pasta"
                  title="pasta"
                  name="child1"
                />
              </td>
              <td>
                <input type="radio" htmlFor="fish" title="fish" name="child1" />
              </td>
              <td>
                <input
                  type="radio"
                  htmlFor="quorn"
                  title="quorn"
                  name="child1"
                />
              </td>
              <td>
                <input
                  type="radio"
                  htmlFor="noDinner"
                  title="noDinner"
                  name="child1"
                  required
                />
              </td>
            </tr>))}
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
