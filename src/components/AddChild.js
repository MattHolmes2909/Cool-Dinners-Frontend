import React, { useState } from "react";
import PostChild from "../requests/PostChild";
import Alert from "./Alert";
import "../styles/AddChild.css"

const AddChild = () => {
    const initialState = {
        fields: {
            childName: "",
            schoolClass: "1DS",
            foodOption: "none",
            allergies: "none"
        },
        alert: {
            message: "",
            isSuccess: false,
        },
    };

    const [fields, setFields] = useState(initialState.fields);
    const[alert, setAlert]= useState(initialState.alert);

    const handleAddChild = (event) => {
        event.preventDefault();
        setAlert({ message: "", isSuccess: false });
        PostChild(fields, setAlert);
    };
    
    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
        <div className="AddChild">
            <form onSubmit={handleAddChild} className="form">
                <p>Add Child</p>
                <div className="form-field">
                    <label htmlFor="title">
                        Child Name:
                        <input
                        name="childName"
                        value={fields.childName}
                        onChange={handleFieldChange}
                        />
                    </label>
                </div>
                <div className="form-child-class">
                    Class
                    <label htmlFor="child-class">
                        <select
                        id="schoolClass"
                        name="schoolClass"
                        value={fields.schoolClass}
                        onChange={handleFieldChange}
                        >
                            <option className="1DS" value="1DS">1DS</option>
                            <option className="1MH" value="1MH">1MH</option>
                            <option className="2AW" value="2AW">2AW</option>
                            <option className="2NM" value="2NM">2NM</option>
                        </select>
                    </label>
                </div>
                <div className="form-child-order">
                    Order
                    <label htmlFor="child-order">
                        <select
                        id="foodOption"
                        name="foodOption"
                        value={fields.foodOption}
                        onChange={handleFieldChange}
                        >
                            <option className="none" value="none">none</option>
                            <option className="pizza" value="pizza">pizza</option>
                            <option className="pasta" value="pasta">pasta</option>
                            <option className="fish" value="fish">fish</option>
                            <option className="quorn" value="quorn">quorn</option>
                        </select>
                    </label>
                </div>
                <div className="form-allergens">
                    Allergies
                    <label htmlFor="allergies">
                        <select
                        id="allergies"
                        name="allergies"
                        value={fields.allergies}
                        onChange={handleFieldChange}
                        >
                            <option className="none" value="none">none</option>
                            <option className="dairy" value="dairy">dairy</option>
                            <option className="wheat" value="wheat">wheat</option>
                            <option className="nuts" value="nuts">nuts</option>
                            <option className="fish" value="fish">fish</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className="form-button">
                    Add
                </button>
                <Alert message={alert.message} success ={alert.isSuccess} />
            </form>
        </div>
    );
};

export default AddChild;
