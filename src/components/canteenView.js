import React, { useState, useEffect } from "react";
import "../styles/CanteenView.css";
import moment from "moment";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";
import axios from "axios";

const CanteenView = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  let tomorrow;
  if (moment().add(1, "day").endOf("day").format("dddd") === "Saturday") {
    tomorrow = moment().add(3, "day").endOf("day");
  }
  if (moment().add(1, "day").endOf("day").format("dddd") === "Sunday") {
    tomorrow = moment().add(2, "day").endOf("day");
  } else {
    tomorrow = moment().add(1, "day").endOf("day");
  }

  const [total, setTotal] = useState({
    pizza: {
      total: 0,
      total1DS: 0,
      total1MH: 0,
      total2AW: 0,
      total2NM: 0,
    },
    pasta: {
      total: 0,
      total1DS: 0,
      total1MH: 0,
      total2AW: 0,
      total2NM: 0,
    },
    fish: {
      total: 0,
      total1DS: 0,
      total1MH: 0,
      total2AW: 0,
      total2NM: 0,
    },
    quorn: {
      total: 0,
      total1DS: 0,
      total1MH: 0,
      total2AW: 0,
      total2NM: 0,
    },
    none: {
      total: 0,
      total1DS: 0,
      total1MH: 0,
      total2AW: 0,
      total2NM: 0,
    },
  });

  useEffect(() => {
    async function fetchTotal() {
      await axios
        .get("https://cool-dinners.herokuapp.com/canteen/")
        .then(response => {
          setTotal(response.data);
        })
        .catch(err => console.error(err));
    }
    return fetchTotal();
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
                <p>{total.pizza.total}</p>
              </td>
              <td>
                <p>{total.pasta.total}</p>
              </td>
              <td>
                <p>{total.fish.total}</p>
              </td>
              <td>
                <p>{total.quorn.total}</p>
              </td>
              <td>
                <p>{total.none.total}</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1DS</label>
                </div>
              </td>
              <td>
                <p>{total.pizza.total1DS}</p>
              </td>
              <td>
                <p>{total.pasta.total1DS}</p>
              </td>
              <td>
                <p>{total.fish.total1DS}</p>
              </td>
              <td>
                <p>{total.quorn.total1DS}</p>
              </td>
              <td>
                <p>{total.none.total1DS}</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1MH</label>
                </div>
              </td>
              <td>
                <p>{total.pizza.total1MH}</p>
              </td>
              <td>
                <p>{total.pasta.total1MH}</p>
              </td>
              <td>
                <p>{total.fish.total1MH}</p>
              </td>
              <td>
                <p>{total.quorn.total1MH}</p>
              </td>
              <td>
                <p>{total.none.total1MH}</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2AW</label>
                </div>
              </td>
              <td>
                <p>{total.pizza.total2AW}</p>
              </td>
              <td>
                <p>{total.pasta.total2AW}</p>
              </td>
              <td>
                <p>{total.fish.total2AW}</p>
              </td>
              <td>
                <p>{total.quorn.total2AW}</p>
              </td>
              <td>
                <p>{total.none.total2AW}</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2NM</label>
                </div>
              </td>
              <td>
                <p>{total.pizza.total2NM}</p>
              </td>
              <td>
                <p>{total.pasta.total2NM}</p>
              </td>
              <td>
                <p>{total.fish.total2NM}</p>
              </td>
              <td>
                <p>{total.quorn.total2NM}</p>
              </td>
              <td>
                <p>{total.none.total2NM}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default CanteenView;
