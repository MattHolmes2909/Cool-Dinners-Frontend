import React, { useState, useEffect } from "react";
import "../styles/CanteenView.css";
import moment from "moment";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import pizza from "../images/pizza.png";
import pasta from "../images/pasta.png";
import fish from "../images/fish.png";
import curry from "../images/curry.png";
import cake from "../images/cake.png";
import pasty from "../images/pasty.png";
import pie from "../images/pie.png";
import plate from "../images/plate.png";
import roll from "../images/roll.png";
import salad from "../images/salad.png";
import sandwich from "../images/sandwich.png";
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

  const handleReset = async event => {
    event.preventDefault();
    await axios
      .patch(`https://cool-dinners.herokuapp.com/canteen/reset`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.error(err));
    await axios
      .get("https://cool-dinners.herokuapp.com/canteen/current")
      .then(response => {
        console.log(response.data);
        setTotal(response.data);
      })
      .catch(err => console.error(err));
  };

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
                      src={
                        total.optionOne.value.includes("pizza")
                          ? pizza
                          : total.optionOne.value.includes("pasta")
                          ? pasta
                          : total.optionOne.value.includes("fish")
                          ? fish
                          : total.optionOne.value.includes("curry")
                          ? curry
                          : total.optionOne.value.includes("cake")
                          ? cake
                          : total.optionOne.value.includes("pasty")
                          ? pasty
                          : total.optionOne.value.includes("pie")
                          ? pie
                          : total.optionOne.value.includes("roll")
                          ? roll
                          : total.optionOne.value.includes("salad")
                          ? salad
                          : total.optionOne.value.includes("sandwich")
                          ? sandwich
                          : plate
                      }
                      className={`foodicon ${total.optionOne.dietary}`}
                      alt={total.optionOne.value}
                    />
                    {total.optionOne.name}
                  </th>
                  <th name={total.optionTwo.name}>
                    <img
                      src={
                        total.optionTwo.value.includes("pizza")
                          ? pizza
                          : total.optionTwo.value.includes("pasta")
                          ? pasta
                          : total.optionTwo.value.includes("fish")
                          ? fish
                          : total.optionTwo.value.includes("curry")
                          ? curry
                          : total.optionTwo.value.includes("cake")
                          ? cake
                          : total.optionTwo.value.includes("pasty")
                          ? pasty
                          : total.optionTwo.value.includes("pie")
                          ? pie
                          : total.optionTwo.value.includes("roll")
                          ? roll
                          : total.optionTwo.value.includes("salad")
                          ? salad
                          : total.optionTwo.value.includes("sandwich")
                          ? sandwich
                          : plate
                      }
                      className={`foodicon ${total.optionTwo.dietary}`}
                      alt={total.optionTwo.value}
                    />
                    {total.optionTwo.name}
                  </th>
                  <th name={total.optionThree.name}>
                    <img
                      src={
                        total.optionThree.value.includes("pizza")
                          ? pizza
                          : total.optionThree.value.includes("pasta")
                          ? pasta
                          : total.optionThree.value.includes("fish")
                          ? fish
                          : total.optionThree.value.includes("curry")
                          ? curry
                          : total.optionThree.value.includes("cake")
                          ? cake
                          : total.optionThree.value.includes("pasty")
                          ? pasty
                          : total.optionThree.value.includes("pie")
                          ? pie
                          : total.optionThree.value.includes("roll")
                          ? roll
                          : total.optionThree.value.includes("salad")
                          ? salad
                          : total.optionThree.value.includes("sandwich")
                          ? sandwich
                          : plate
                      }
                      className={`foodicon ${total.optionThree.dietary}`}
                      alt={total.optionThree.value}
                    />
                    {total.optionThree.name}
                  </th>
                  <th name={total.optionFour.name}>
                    <img
                      src={
                        total.optionFour.value.includes("pizza")
                          ? pizza
                          : total.optionFour.value.includes("pasta")
                          ? pasta
                          : total.optionFour.value.includes("fish")
                          ? fish
                          : total.optionFour.value.includes("curry")
                          ? curry
                          : total.optionFour.value.includes("cake")
                          ? cake
                          : total.optionFour.value.includes("pasty")
                          ? pasty
                          : total.optionFour.value.includes("pie")
                          ? pie
                          : total.optionFour.value.includes("roll")
                          ? roll
                          : total.optionFour.value.includes("salad")
                          ? salad
                          : total.optionFour.value.includes("sandwich")
                          ? sandwich
                          : plate
                      }
                      className={`foodicon ${total.optionFour.dietary}`}
                      alt={total.optionFour.value}
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
            <button
              type="submit"
              className="reset-button"
              onClick={handleReset}
            >
              Press to reset!
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export default CanteenView;
