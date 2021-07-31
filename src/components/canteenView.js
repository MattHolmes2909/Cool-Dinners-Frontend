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
    "pizza": {
        "totalPizza": 0
    },
    "pasta": {
        "totalPasta": 0
    },
    "fish": {
        "totalFish": 0
    },
    "quorn": {
        "totalQuorn": 0
    },
    "none": {
        "totalNone": 0
    }
});

const [pizzaTotal, setPizzaTotal] = useState({
  "total1DS": {
      "total1DS": 0
  },
  "total1MH": {
      "total1MH": 0
  },
  "total2AW": {
      "total2AW": 0
  },
  "total2NM": {
      "total2NM": 0
  }
});

const [pastaTotal, setPastaTotal] = useState({
  "total1DS": {
      "total1DS": 0
  },
  "total1MH": {
      "total1MH": 0
  },
  "total2AW": {
      "total2AW": 0
  },
  "total2NM": {
      "total2NM": 0
  }
});

const [fishTotal, setFishTotal] = useState({
  "total1DS": {
      "total1DS": 0
  },
  "total1MH": {
      "total1MH": 0
  },
  "total2AW": {
      "total2AW": 0
  },
  "total2NM": {
      "total2NM": 0
  }
});

const [quornTotal, setQuornTotal] = useState({
  "total1DS": {
      "total1DS": 0
  },
  "total1MH": {
      "total1MH": 0
  },
  "total2AW": {
      "total2AW": 0
  },
  "total2NM": {
      "total2NM": 0
  }
});

const [noneTotal, setNoneTotal] = useState({
  "total1DS": {
      "total1DS": 0
  },
  "total1MH": {
      "total1MH": 0
  },
  "total2AW": {
      "total2AW": 0
  },
  "total2NM": {
      "total2NM": 0
  }
});

  useEffect(() => {
    async function fetchTotal() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/")
    .then((response) => {
      setTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchTotal();
  }, []);

  useEffect(() => {
    async function fetchPizza() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/pizza")
    .then((response) => {
      setPizzaTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchPizza();
  }, []);

  useEffect(() => {
    async function fetchPasta() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/pasta")
    .then((response) => {
      setPastaTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchPasta();
  }, []);

  useEffect(() => {
    async function fetchFish() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/fish")
    .then((response) => {
      setFishTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchFish();
  }, []);

  useEffect(() => {
    async function fetchQuorn() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/quorn")
    .then((response) => {
      setQuornTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchQuorn();
  }, []);

  useEffect(() => {
    async function fetchNone() {
    await axios
    .get("https://cool-dinners.herokuapp.com/canteen/none")
    .then((response) => {
      setNoneTotal(response.data)
    })
    .catch((err) => console.error(err));
  }
  return fetchNone();
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
                <p>{ total.pizza.totalPizza }</p>
              </td>
              <td>
                <p>{ total.pasta.totalPasta }</p>
                </td>
                <td>
                <p>{ total.fish.totalFish }</p>
              </td>
              <td>
                <p>{ total.quorn.totalQuorn }</p>
              </td>
              <td>
                <p>{ total.none.totalNone }</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1DS</label>
                </div>
              </td>
              <td>
                <p>{ pizzaTotal.total1DS.total1DS }</p>
              </td>
              <td>
                <p>{ pastaTotal.total1DS.total1DS }</p>
              </td>
              <td>
                <p>{ fishTotal.total1DS.total1DS }</p>
              </td>
              <td>
                <p>{ quornTotal.total1DS.total1DS }</p>
              </td>
              <td>
                <p>{ noneTotal.total1DS.total1DS }</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">1MH</label>
                </div>
              </td>
              <td>
                <p>{ pizzaTotal.total1MH.total1MH}</p>
              </td>
              <td>
                <p>{ pastaTotal.total1MH.total1MH }</p>
              </td>
              <td>
                <p>{fishTotal.total1MH.total1MH }</p>
              </td>
              <td>
                <p>{ quornTotal.total1MH.total1MH }</p>
              </td>
              <td>
                <p>{ noneTotal.total1MH.total1MH }</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2AW</label>
                </div>
              </td>
              <td>
                <p>{ pizzaTotal.total2AW.total2AW  }</p>
              </td>
              <td>
                <p>{ pastaTotal.total2AW.total2AW  }</p>
              </td>
              <td>
                <p>{ fishTotal.total2AW.total2AW  }</p>
              </td>
              <td>
                <p>{ quornTotal.total2AW.total2AW  }</p>
              </td>
              <td>
                <p>{ noneTotal.total2AW.total2AW  }</p>
              </td>
            </tr>
            <tr className="classRow">
              <td>
                <div className="radiotext">
                  <label htmlFor="schoolclass">2NM</label>
                </div>
              </td>
              <td>
                <p>{ pizzaTotal.total2NM.total2NM }</p>
              </td>
              <td>
                <p>{ pastaTotal.total2NM.total2NM }</p>
              </td>
              <td>
                <p>{ fishTotal.total2NM.total2NM }</p>
              </td>
              <td>
                <p>{ quornTotal.total2NM.total2NM }</p>
              </td>
              <td>
                <p>{ noneTotal.total2NM.total2NM }</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default CanteenView;
