import React, { useState } from "react";
import Alert from "./Alert";
import "../styles/AddChild.css"

const AddChild = () => {
    const initialState = {
        fields: {
            name: "",
            class: "",
            allergies: "None",
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
                        name="name"
                        onChange={handleFieldChange}
                        />
                    </label>
                </div>
                <div className="form-child-class">
                    Class
                    <label htmlFor="child-class">
                        <select
                        id="class"
                        name="class"
                        value={fields.class}
                        onChange={handleFieldChange}
                        >
                            <option class="1DS">1DS</option>
                            <option class="1MH">1MH</option>
                            <option class="2AW">2AW</option>
                            <option class="2NM">2NM</option>
                        </select>
                    </label>
                </div>
                <div className="form-allergens">
                    Allergies
                    <label htmlFor="allergies">
                        <select
                        id="alleries"
                        name="allergies"
                        value={fields.allergies}
                        onChange={handleFieldChange}
                        >
                            <option value="None">None</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Nuts">Nuts</option>
                            <option value="Fish">Fish</option>
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
