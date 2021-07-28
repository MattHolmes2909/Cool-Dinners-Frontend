import React, { useEffect } from "react";
import "../styles/TeacherView.css";
import moment from "moment";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";
import GetData from "../requests/getData";

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

  useEffect(() => {
    GetData()
  }, []);

  return (
    <div className="TeacherView">
      <p className="order-message">You are ordering dinners for⠀</p>
      <p className="tomorrow">{tomorrow.format("dddd, MMMM Do YYYY")}!</p>
      <form class="order-form">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th className="schoolclass" name="childName">1DS</th>
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
            <tr className="childRow">
              <td>
                <div class="radiotext">
                  <label for="childName">Dean Spooner</label>
                </div>
              </td>
              <td>
                <input type="radio" for="pizza" title="pizza" name="child1" />
              </td>
              <td>
                <input type="radio" for="pasta" title="pasta" name="child1" />
              </td>
              <td>
                <input type="radio" for="fish" title="fish" name="child1" />
              </td>
              <td>
                <input type="radio" for="quorn" title="quorn" name="child1" />
              </td>
              <td>
                <input
                  type="radio"
                  for="noDinner"
                  title="noDinner"
                  name="child1"
                  required
                />
              </td>
            </tr>
            <tr className="childRow">
              <td>
                <div class="radiotext">
                  <label for="childName">Matt Holmes</label>
                </div>
              </td>
              <td>
                <input type="radio" for="pizza" title="pizza" name="child2" />
              </td>
              <td>
                <input type="radio" for="pasta" title="pasta" name="child2" />
              </td>
              <td>
                <input type="radio" for="fish" title="fish" name="child2" />
              </td>
              <td>
                <input type="radio" for="quorn" title="quorn" name="child2" />
              </td>
              <td>
                <input
                  type="radio"
                  for="noDinner"
                  title="noDinner"
                  name="child2"
                  required
                />
              </td>
            </tr>
            <tr className="childRow">
              <td>
                <div class="radiotext">
                  <label for="childName">Alex White</label>
                </div>
              </td>
              <td>
                <input type="radio" for="pizza" title="pizza" name="child3" />
              </td>
              <td>
                <input type="radio" for="pasta" title="pasta" name="child3" />
              </td>
              <td>
                <input type="radio" for="fish" title="fish" name="child3" />
              </td>
              <td>
                <input type="radio" for="quorn" title="quorn" name="child3" />
              </td>
              <td>
                <input
                  type="radio"
                  for="noDinner"
                  title="noDinner"
                  name="child3"
                  required
                />
              </td>
            </tr>
            <tr className="childRow">
              <td>
                <div class="radiotext">
                  <label for="childName">Nathan Mayall</label>
                </div>
              </td>
              <td>
                <input type="radio" for="pizza" title="pizza" name="child4" />
              </td>
              <td>
                <input type="radio" for="pasta" title="pasta" name="child4" />
              </td>
              <td>
                <input type="radio" for="fish" title="fish" name="child4" />
              </td>
              <td>
                <input type="radio" for="quorn" title="quorn" name="child4" />
              </td>
              <td>
                <input
                  type="radio"
                  for="noDinner"
                  title="noDinner"
                  name="child4"
                  required
                />
              </td>
            </tr>
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
