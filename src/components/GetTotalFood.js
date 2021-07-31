import React, { useState, useEffect } from "react";
import GetTotalRequest from "../requests/GetTotalRequest";
import PropTypes from "prop-types";

const GetTotalFood = () => {
    const [foodOption, setFoodOption] = useState("");
    
useEffect(() => {
    GetTotalRequest(setFoodOption);
}, []);



return GetTotalFood;
};

export default GetTotalFood;

GetTotalFood.Proptypes = {
    foodOption: PropTypes.string.isRequired,
};