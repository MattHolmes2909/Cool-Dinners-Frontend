import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import "../styles/EditMenu.css";

const EditMenu = () => {
  const user = useContext(AuthContext);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      await axios
        .get(`https://cool-dinners.herokuapp.com/menu`)
        .then(response => {
          console.log(response.data);
          setMenu(response.data);
        })
        .catch(err => console.error(err));
    }
    return fetchMenu();
  }, [user.currentUser.userType]);

  const handleOptionChange = async event => {
    event.preventDefault();
    if (event.target.value === "0") {
      console.log(
        "Cannot set directly to None, please choose an unused menu option to replace this instead."
      );
    } else {
      await axios
        .patch(`https://cool-dinners.herokuapp.com/menu/editOptionNumbers`, {
          id: event.target.name,
          foodOptionNum: event.target.value,
        })
        .then(response => {
          console.log(response.data);
          console.log("Menu option number changed!");
        })
        .catch(err => console.error(err));
      await axios
        .get(`https://cool-dinners.herokuapp.com/menu`)
        .then(response => {
          setMenu(response.data);
        });
    }
  };

  const handleDelete = async event => {
    event.preventDefault();
    await axios
      .delete(`https://cool-dinners.herokuapp.com/menu/${event.target.value}`)
      .then(response => {
        console.log(response.data);
        console.log("Menu item deleted!");
      })
      .catch(err => console.error(err));
    await axios
      .get(`https://cool-dinners.herokuapp.com/menu`)
      .then(response => {
        setMenu(response.data);
      });
  };

  return (
    <div className="EditMenu">
      {user.currentUser.userType === "admin" && (
        <>
          <table className="table table-responsive">
            <thead>
              <tr className="foodHead">
                <th className="foodFoodName" name="foodName">
                  Food Name
                </th>
                <th className="foodValue" name="value">
                  Table Value
                </th>
                <th className="foodAllergens" name="allergens">
                  Allergens
                </th>
                <th className="foodDietary" name="dietary">
                  Dietary Category
                </th>
                <th className="foodOptionNumber" name="optionNumber">
                  Option Number
                </th>
                <th className="deleteFood" name="deleteFood">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((food, index) => (
                <tr className="foodRow" key={food.id}>
                  <td>
                    <label htmlFor="foodName">{food.foodName}</label>
                  </td>
                  <td>
                    <label htmlFor="value">{food.value}</label>
                  </td>
                  <td>
                    <label htmlFor="allergens">{food.allergens}</label>
                  </td>
                  <td>
                    <label htmlFor="dietary">
                      {food.dietary === "meat"
                        ? "Meat"
                        : food.dietary === "fish"
                        ? "Fish"
                        : food.dietary === "veg"
                        ? "Vegetarian"
                        : ""}
                    </label>
                  </td>
                  <td>
                    <label htmlFor="optionNumber button0">
                      <button
                        type="submit"
                        value="0"
                        name={food.id}
                        className={`optionNumberButton button0  ${
                          food.foodOptionNum === 0
                            ? "button0selected"
                            : "buttonUnselected"
                        }`}
                        onClick={handleOptionChange}
                      >
                        None
                      </button>
                      <button
                        type="submit"
                        value="1"
                        name={food.id}
                        className={`optionNumberButton button1 ${
                          food.foodOptionNum === 1
                            ? "button1selected"
                            : "buttonUnselected"
                        }`}
                        onClick={handleOptionChange}
                      >
                        1
                      </button>
                      <button
                        type="submit"
                        value="2"
                        name={food.id}
                        className={`optionNumberButton button2 ${
                          food.foodOptionNum === 2
                            ? "button2selected"
                            : "buttonUnselected"
                        }`}
                        onClick={handleOptionChange}
                      >
                        2
                      </button>
                      <button
                        type="submit"
                        value="3"
                        name={food.id}
                        className={`optionNumberButton button3 ${
                          food.foodOptionNum === 3
                            ? "button3selected"
                            : "buttonUnselected"
                        }`}
                        onClick={handleOptionChange}
                      >
                        3
                      </button>
                      <button
                        type="submit"
                        value="4"
                        name={food.id}
                        className={`optionNumberButton button4 ${
                          food.foodOptionNum === 4
                            ? "button4selected"
                            : "buttonUnselected"
                        }`}
                        onClick={handleOptionChange}
                      >
                        4
                      </button>
                    </label>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="delete-button"
                      value={food.id}
                      onClick={handleDelete}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default EditMenu;
