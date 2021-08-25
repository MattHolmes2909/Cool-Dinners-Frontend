import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "./Alert";
import axios from "axios";
import "../styles/AddMenu.css";

const AddMenu = () => {
  const user = useContext(AuthContext);

  const initialState = {
    fields: {
      foodName: "",
      value: "",
      allergens: "none",
      dietary: "meat",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const handleMenuAdd = event => {
    event.preventDefault();
    axios
      .post("https://cool-dinners.herokuapp.com/menu", {
        foodName: fields.foodName,
        value: fields.value,
        foodOptionNum: 0,
        allergens: fields.allergens,
        dietary: fields.dietary,
      })
      .then(res => {
        console.log(res);
        setAlert({ message: "Menu Item Added", isSuccess: true });
      });
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddUser">
      {user.currentUser.userType === "admin" && (
        <>
          <form onSubmit={handleMenuAdd} className="addMenuForm">
            <p className="p-tag-menu">Add Menu Item</p>
            <div className="form-field">
              <label htmlFor="foodName" className="type-label">
                Food Name:
              </label>
              <input
                name="foodName"
                className="register-input"
                placeholder="Food Name..."
                value={fields.foodName}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-food-value">
              <label htmlFor="value" className="type-label">
                Table value:
              </label>
              <input
                className="register-input"
                type="value"
                placeholder="Table Value..."
                name="value"
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="form-food-allergens">
              Allergens:
              <label htmlFor="allergens" className="food-allergens">
                <select
                  id="userType"
                  className="foodAllergensSelect"
                  name="allergens"
                  value={fields.allergens}
                  onChange={handleFieldChange}
                  required
                >
                  <option className="none foodAllergensSelect" value="none">
                    None
                  </option>
                  <option className="dairy foodAllergensSelect" value="dairy">
                    Dairy
                  </option>
                  <option className="wheat foodAllergensSelect" value="wheat">
                    Wheat
                  </option>
                  <option className="nuts foodAllergensSelect" value="nuts">
                    Nuts
                  </option>
                  <option className="fish foodAllergensSelect" value="fish">
                    Fish
                  </option>
                </select>
              </label>
            </div>
            <div className="form-food-dietary">
              Dietary Category:
              <label htmlFor="dietary" className="dietary-label">
                <select
                  id="dietarySelect"
                  className="foodDietarySelect"
                  name="dietary"
                  value={fields.dietary}
                  onChange={handleFieldChange}
                >
                  <option className="foodDietarySelect" value="meat">
                    Meat
                  </option>
                  <option className="foodDietarySelect" value="fish">
                    Fish
                  </option>
                  <option className="foodDietarySelect" value="veg">
                    Vegetarian
                  </option>
                </select>
              </label>
            </div>
            <button type="submit" className="register-form-button">
              Add Item
            </button>
            <Alert message={alert.message} success={alert.isSuccess} />
          </form>
        </>
      )}
    </div>
  );
};

export default AddMenu;