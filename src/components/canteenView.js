import React, { useEffect } from "react";
import "../styles/CanteenView.css";
import moment from "moment";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";
import GetData from "../requests/getData";


const CanteenView = () => {
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
    <div className="CanteenView">
      <p className="order-message">You are ordering dinners for⠀</p>
      <p className="tomorrow">{tomorrow.format("dddd, MMMM Do YYYY")}!</p>
      <form className="order-form">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th name="className"></th>
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
          <tr className="totalRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">Total</label>
                </div>
              </td>
              <td>
                <p>33</p>
              </td>
              <td>
                <p>27</p>
              </td>
              <td>
                <p>41</p>
              </td>
              <td>
                <p>25</p>
              </td>
              <td>
                <p>29</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1DS</label>
                </div>
              </td>
              <td>
                <p>10</p>
              </td>
              <td>
                <p>6</p>
              </td>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>8</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1MH</label>
                </div>
              </td>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>4</p>
              </td>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>15</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2AW</label>
                </div>
              </td>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>14</p>
              </td>
              <td>
                <p>5</p>
              </td>
              <td>
                <p>1</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2NM</label>
                </div>
              </td>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>16</p>
              </td>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>5</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default CanteenView;
