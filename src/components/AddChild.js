import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import PostChild from "../requests/PostChild";
import Alert from "./Alert";
import "../styles/AddChild.css";

const AddChild = () => {
  const user = useContext(AuthContext);

  const initialState = {
    fields: {
      childName: "",
      schoolClass: "1DS",
      foodOption: "none",
      allergies: "none",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddChild = event => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    PostChild(fields, setAlert);
  };

  const handleFieldChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddChild">
      {(user.currentUser.userType === "admin" ||
        user.currentUser.userType === "teacher") && (
        <>
          <form onSubmit={handleAddChild} className="form childform">
            <p className="p-tag">Add Child</p>
            <div className="childform-title">
              <label htmlFor="title">
                Child Name:
                <input className="childNameSelect"
                  name="childName"
                  value={fields.childName}
                  onChange={handleFieldChange}
                  placeholder="Enter Name..."
                />
              </label>
            </div>
            <div className="childform-title">
              Class
              <label htmlFor="child-class" className="childform-label">
                <select
                  id="schoolClass"
                  className="schoolClassSelect"
                  name="schoolClass"
                  value={fields.schoolClass}
                  onChange={handleFieldChange}
                >
                  <option className="1DS classSelect" value="1DS">
                    1DS
                  </option>
                  <option className="1MH classSelect" value="1MH">
                    1MH
                  </option>
                  <option className="2AW classSelect" value="2AW">
                    2AW
                  </option>
                  <option className="2NM classSelect" value="2NM">
                    2NM
                  </option>
                </select>
              </label>
            </div>
            <div className="childform-title">
              Order
              <label htmlFor="child-order" className="childform-label">
                <select
                  id="foodOption"
                  className="foodSelect"
                  name="foodOption"
                  value={fields.foodOption}
                  onChange={handleFieldChange}
                >
                  <option className="none foodOptionSelect" value="none">
                    None
                  </option>
                  <option className="pizza foodOptionSelect" value="pizza">
                    Pizza
                  </option>
                  <option className="pasta foodOptionSelect" value="pasta">
                    Pasta
                  </option>
                  <option className="fish foodOptionSelect" value="fish">
                    Fish
                  </option>
                  <option className="quorn foodOptionSelect" value="quorn">
                    Quorn
                  </option>
                </select>
              </label>
            </div>
            <div className="childform-title">
              Allergies
              <label htmlFor="allergies" className="childform-label">
                <select
                  id="allergies"
                  className="allergiesSelect"
                  name="allergies"
                  value={fields.allergies}
                  onChange={handleFieldChange}
                >
                  <option className="none allergyOptionSelect" value="none">
                    None
                  </option>
                  <option className="celery allergyOptionSelect" value="celery">
                    Celery
                  </option>
                  <option className="crustaceans allergyOptionSelect" value="crustaceans">
                    Crustaceans
                  </option>
                  <option className="eggs allergyOptionSelect" value="eggs">
                    Eggs
                  </option>
                  <option className="fish allergyOptionSelect" value="fish">
                    Fish
                  </option>
                  <option className="gluten allergyOptionSelect" value="gluten">
                    Gluten
                  </option>
                  <option className="lupin allergyOptionSelect" value="lupin">
                    Lupin
                  </option>
                  <option className="milk allergyOptionSelect" value="milk">
                    Milk
                  </option>
                  <option className="molluscs allergyOptionSelect" value="molluscs">
                    Molluscs
                  </option>
                  <option className="mustard allergyOptionSelect" value="mustard">
                    Mustard
                  </option>
                  <option className="peanuts allergyOptionSelect" value="peanuts">
                    Peanuts
                  </option>
                  <option className="sesame allergyOptionSelect" value="sesame">
                    Sesame
                  </option>
                  <option className="soybeans allergyOptionSelect" value="soybeans">
                    Soybeans
                  </option>
                  <option className="sulphites allergyOptionSelect" value="sulphites">
                    Sulphites
                  </option>
                  <option className="treenuts allergyOptionSelect" value="treenuts">
                    Tree nuts
                  </option>
                  <option className="multiple allergyOptionSelect" value="multiple">
                    Multiple Allergies
                  </option>
                </select>
              </label>
            </div>
            <button type="submit" className="childform-button">
              Add
            </button>
            <Alert message={alert.message} success={alert.isSuccess} />
          </form>
        </>
      )}
    </div>
  );
};

export default AddChild;
