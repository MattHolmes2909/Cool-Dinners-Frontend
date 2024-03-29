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
import cake from "../images/cake.png";
import pasty from "../images/pasty.png";
import pie from "../images/pie.png";
import plate from "../images/plate.png";
import roll from "../images/roll.png";
import salad from "../images/salad.png";
import sandwich from "../images/sandwich.png";
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

  const [menu, setMenu] = useState({
    optionOne: {
      id: 0,
      foodName: "...",
      value: "...",
      foodOptionNum: 1,
      allergens: "...",
      dietary: "...",
    },
    optionTwo: {
      id: 0,
      foodName: "...",
      value: "...",
      foodOptionNum: 2,
      allergens: "...",
      dietary: "...",
    },
    optionThree: {
      id: 0,
      foodName: "...",
      value: "...",
      foodOptionNum: 3,
      allergens: "...",
      dietary: "...",
    },
    optionFour: {
      id: 0,
      foodName: "...",
      value: "...",
      foodOptionNum: 4,
      allergens: "...",
      dietary: "...",
    },
  });
  const [Children, SetChildren] = useState([]);
  const [newOrders] = useState([]);
  const [allergens] = useState({
    optionOneAllergens: "",
    optionTwoAllergens: "",
    optionThreeAllergens: "",
    optionFourAllergens: "",
  });

  useEffect(() => {
    async function fetchData() {
      let onlineMenu = `https://cool-dinners.herokuapp.com/menu/current`;
      let child =
        user.currentUser.userType === "admin"
          ? `https://cool-dinners.herokuapp.com/child`
          : `https://cool-dinners.herokuapp.com/child/class/${user.currentUser.schoolClass}`;
      const requestMenu = axios.get(onlineMenu);
      const requestChild = axios.get(child);
      await axios
        .all([requestMenu, requestChild])
        .then(
          axios.spread((...responses) => {
            setMenu(responses[0].data);
            SetChildren(responses[1].data);
          }),
          (allergens.optionOneAllergens = menu.optionOne.allergens),
          (allergens.optionTwoAllergens = menu.optionTwo.allergens),
          (allergens.optionThreeAllergens = menu.optionThree.allergens),
          (allergens.optionFourAllergens = menu.optionFour.allergens),
          console.log(allergens)
        )
        .catch(err => console.error(err));
    }
    return fetchData();
  }, [
    user.currentUser.schoolClass,
    user.currentUser.userType,
    allergens,
    menu.optionOne.allergens,
    menu.optionTwo.allergens,
    menu.optionThree.allergens,
    menu.optionFour.allergens,
  ]);

  const handleOrders = event => {
    event.preventDefault();
    const data = { newOrders: newOrders };
    console.log(data);
    axios
      .patch(`https://cool-dinners.herokuapp.com/child/updatemany`, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.error(err));
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
              <th name={menu.optionOne.foodName}>
                <img
                  src={
                    menu.optionOne.value.includes("pizza")
                      ? pizza
                      : menu.optionOne.value.includes("pasta")
                      ? pasta
                      : menu.optionOne.value.includes("fish")
                      ? fish
                      : menu.optionOne.value.includes("curry")
                      ? curry
                      : menu.optionOne.value.includes("cake")
                      ? cake
                      : menu.optionOne.value.includes("pasty")
                      ? pasty
                      : menu.optionOne.value.includes("pie")
                      ? pie
                      : menu.optionOne.value.includes("roll")
                      ? roll
                      : menu.optionOne.value.includes("salad")
                      ? salad
                      : menu.optionOne.value.includes("sandwich")
                      ? sandwich
                      : plate
                  }
                  className={`foodicon ${menu.optionOne.dietary}`}
                  alt={menu.optionOne.foodName}
                />
                {menu.optionOne.foodName}
              </th>
              <th name={menu.optionTwo.foodName}>
                <img
                  src={
                    menu.optionTwo.value.includes("pizza")
                      ? pizza
                      : menu.optionTwo.value.includes("pasta")
                      ? pasta
                      : menu.optionTwo.value.includes("fish")
                      ? fish
                      : menu.optionTwo.value.includes("curry")
                      ? curry
                      : menu.optionTwo.value.includes("cake")
                      ? cake
                      : menu.optionTwo.value.includes("pasty")
                      ? pasty
                      : menu.optionTwo.value.includes("pie")
                      ? pie
                      : menu.optionTwo.value.includes("roll")
                      ? roll
                      : menu.optionTwo.value.includes("salad")
                      ? salad
                      : menu.optionTwo.value.includes("sandwich")
                      ? sandwich
                      : plate
                  }
                  className={`foodicon ${menu.optionTwo.dietary}`}
                  alt={menu.optionTwo.foodName}
                />
                {menu.optionTwo.foodName}
              </th>
              <th name={menu.optionThree.foodName}>
                <img
                  src={
                    menu.optionThree.value.includes("pizza")
                      ? pizza
                      : menu.optionThree.value.includes("pasta")
                      ? pasta
                      : menu.optionThree.value.includes("fish")
                      ? fish
                      : menu.optionThree.value.includes("curry")
                      ? curry
                      : menu.optionThree.value.includes("cake")
                      ? cake
                      : menu.optionThree.value.includes("pasty")
                      ? pasty
                      : menu.optionThree.value.includes("pie")
                      ? pie
                      : menu.optionThree.value.includes("roll")
                      ? roll
                      : menu.optionThree.value.includes("salad")
                      ? salad
                      : menu.optionThree.value.includes("sandwich")
                      ? sandwich
                      : plate
                  }
                  className={`foodicon ${menu.optionThree.dietary}`}
                  alt={menu.optionThree.foodName}
                />
                {menu.optionThree.foodName}
              </th>
              <th name={menu.optionFour.foodName}>
                <img
                  src={
                    menu.optionFour.value.includes("pizza")
                      ? pizza
                      : menu.optionFour.value.includes("pasta")
                      ? pasta
                      : menu.optionFour.value.includes("fish")
                      ? fish
                      : menu.optionFour.value.includes("curry")
                      ? curry
                      : menu.optionFour.value.includes("cake")
                      ? cake
                      : menu.optionFour.value.includes("pasty")
                      ? pasty
                      : menu.optionFour.value.includes("pie")
                      ? pie
                      : menu.optionFour.value.includes("roll")
                      ? roll
                      : menu.optionFour.value.includes("salad")
                      ? salad
                      : menu.optionFour.value.includes("sandwich")
                      ? sandwich
                      : plate
                  }
                  className={`foodicon ${menu.optionFour.dietary}`}
                  alt={menu.optionFour.foodName}
                />
                {menu.optionFour.foodName}
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
                {allergens.optionOneAllergens !== "none" &&
                allergens.optionOneAllergens === Child.allergies ? (
                  <td value={menu.optionOne.value} className="allergicBox">
                    <input
                      type="radio"
                      htmlFor={menu.optionOne.value}
                      title={menu.optionOne.value}
                      name={Child.id}
                      value={menu.optionOne.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={Child.foodOption === menu.optionOne.value}
                      disabled
                    />
                    <p className="allergic">Allergic!</p>
                  </td>
                ) : (
                  <td value={menu.optionOne.value}>
                    <input
                      type="radio"
                      htmlFor={menu.optionOne.value}
                      title={menu.optionOne.value}
                      name={Child.id}
                      value={menu.optionOne.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={Child.foodOption === menu.optionOne.value}
                    />
                  </td>
                )}
                {allergens.optionTwoAllergens !== "none" &&
                Child.allergies === allergens.optionTwoAllergens ? (
                  <td value={menu.optionTwo.value} className="allergicBox">
                    <input
                      type="radio"
                      htmlFor={menu.optionTwo.value}
                      title={menu.optionTwo.value}
                      name={Child.id}
                      value={menu.optionTwo.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={Child.foodOption === menu.optionTwo.value}
                      disabled
                    />
                    <p className="allergic">Allergic!</p>
                  </td>
                ) : (
                  <td value={menu.optionTwo.value}>
                    <input
                      type="radio"
                      htmlFor={menu.optionTwo.value}
                      title={menu.optionTwo.value}
                      name={Child.id}
                      value={menu.optionTwo.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={Child.foodOption === menu.optionTwo.value}
                    />
                  </td>
                )}
                {allergens.optionThreeAllergens !== "none" &&
                Child.allergies === allergens.optionThreeAllergens ? (
                  <td value={menu.optionThree.value} className="allergicBox">
                    <input
                      type="radio"
                      htmlFor={menu.optionThree.value}
                      title={menu.optionThree.value}
                      name={Child.id}
                      value={menu.optionThree.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={
                        Child.foodOption === menu.optionThree.value
                      }
                      disabled
                    />
                    <p className="allergic">Allergic!</p>
                  </td>
                ) : (
                  <td value={menu.optionThree.value}>
                    <input
                      type="radio"
                      htmlFor={menu.optionThree.value}
                      title={menu.optionThree.value}
                      name={Child.id}
                      value={menu.optionThree.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={
                        Child.foodOption === menu.optionThree.value
                      }
                    />
                  </td>
                )}
                {allergens.optionFourAllergens !== "none" &&
                Child.allergies === allergens.optionFourAllergens ? (
                  <td value={menu.optionFour.value} className="allergicBox">
                    <input
                      type="radio"
                      htmlFor={menu.optionFour.value}
                      title={menu.optionFour.value}
                      name={Child.id}
                      value={menu.optionFour.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={
                        Child.foodOption === menu.optionFour.value
                      }
                      disabled
                    />
                    <p className="allergic">Allergic!</p>
                  </td>
                ) : (
                  <td value={menu.optionFour.value}>
                    <input
                      type="radio"
                      htmlFor={menu.optionFour.value}
                      title={menu.optionFour.value}
                      name={Child.id}
                      value={menu.optionFour.value}
                      onClick={handleFoodChange}
                      data-id={index}
                      defaultChecked={
                        Child.foodOption === menu.optionFour.value
                      }
                    />
                  </td>
                )}
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
                    required
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
