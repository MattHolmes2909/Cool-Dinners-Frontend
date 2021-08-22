import React, { useState, useEffect } from "react";
import "../styles/CanteenView.css";
import moment from "moment";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import noDinner from "../images/nodinner.png";
import axios from "axios";

const CanteenView = () => {
  let today = moment().endOf("day");

  const user = useContext(AuthContext);

  const [total, setTotal] = useState({
    optionOne: {
      name: "...",
      total: "...",
      total1DS: "...",
      total1MH: "...",
      total2AW: "...",
      total2NM: "...",
      value: "",
      dietary: "",
    },
    optionTwo: {
      name: "...",
      total: "...",
      total1DS: "...",
      total1MH: "...",
      total2AW: "...",
      total2NM: "...",
      value: "",
      dietary: "",
    },
    optionThree: {
      name: "...",
      total: "...",
      total1DS: "...",
      total1MH: "...",
      total2AW: "...",
      total2NM: "...",
      value: "",
      dietary: "",
    },
    optionFour: {
      name: "...",
      total: "...",
      total1DS: "...",
      total1MH: "...",
      total2AW: "...",
      total2NM: "...",
      value: "",
      dietary: "",
    },
    none: {
      total: "...",
      total1DS: "...",
      total1MH: "...",
      total2AW: "...",
      total2NM: "...",
    },
  });

  useEffect(() => {
    async function fetchTotal() {
      await axios
        .get("https://cool-dinners.herokuapp.com/canteen/current")
        .then(response => {
          console.log(response.data);
          setTotal(response.data);
        })
        .catch(err => console.error(err));
    }
    return fetchTotal();
  }, []);

  return (
    <div className="CanteenView">
      {(user.currentUser.userType === "canteen" ||
        user.currentUser.userType === "admin") && (
        <>
          <p className="order-message">You are viewing dinners for⠀</p>
          <p className="tomorrow">{today.format("dddd, MMMM Do YYYY")}!</p>
          <form className="order-form">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th name="className"></th>
                  <th name={total.optionOne.name}>
                    <img
                      src={pizza}
                      className={`foodicon ${total.optionOne.dietary}`}
                      alt={total.optionOne.name}
                    />
                    {total.optionOne.name}
                  </th>
                  <th name={total.optionTwo.name}>
                    <img
                      src={pasta}
                      className={`foodicon ${total.optionTwo.dietary}`}
                      alt={total.optionTwo.name}
                    />
                    {total.optionTwo.name}
                  </th>
                  <th name={total.optionThree.name}>
                    <img
                      src={fish}
                      className={`foodicon ${total.optionThree.dietary}`}
                      alt={total.optionThree.name}
                    />
                    {total.optionThree.name}
                  </th>
                  <th name={total.optionFour.name}>
                    <img
                      src={curry}
                      className={`foodicon ${total.optionFour.dietary}`}
                      alt={total.optionFour.name}
                    />
                    {total.optionFour.name}
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
                    <p>{total.optionOne.total}</p>
                  </td>
                  <td>
                    <p>{total.optionTwo.total}</p>
                  </td>
                  <td>
                    <p>{total.optionThree.total}</p>
                  </td>
                  <td>
                    <p>{total.optionFour.total}</p>
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
                    <p>{total.optionOne.total1DS}</p>
                  </td>
                  <td>
                    <p>{total.optionTwo.total1DS}</p>
                  </td>
                  <td>
                    <p>{total.optionThree.total1DS}</p>
                  </td>
                  <td>
                    <p>{total.optionFour.total1DS}</p>
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
                    <p>{total.optionOne.total1MH}</p>
                  </td>
                  <td>
                    <p>{total.optionTwo.total1MH}</p>
                  </td>
                  <td>
                    <p>{total.optionThree.total1MH}</p>
                  </td>
                  <td>
                    <p>{total.optionFour.total1MH}</p>
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
                    <p>{total.optionOne.total2AW}</p>
                  </td>
                  <td>
                    <p>{total.optionTwo.total2AW}</p>
                  </td>
                  <td>
                    <p>{total.optionThree.total2AW}</p>
                  </td>
                  <td>
                    <p>{total.optionFour.total2AW}</p>
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
                    <p>{total.optionOne.total2NM}</p>
                  </td>
                  <td>
                    <p>{total.optionTwo.total2NM}</p>
                  </td>
                  <td>
                    <p>{total.optionThree.total2NM}</p>
                  </td>
                  <td>
                    <p>{total.optionFour.total2NM}</p>
                  </td>
                  <td>
                    <p>{total.none.total2NM}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </>
      )}
    </div>
  );
};
export default CanteenView;
