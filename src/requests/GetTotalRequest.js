import axios from "axios";
import PropTypes from "prop-types";

const GetTotalFood = ({ setFoodOption }) => {
    
    let endpoint = "https://cool-dinners.herokuapp.com/canteen/";

    if (setFoodOption) {
        endpoint += `${setFoodOption}`;
      }
    
    return axios
    .get(endpoint)
    .then((response) => {
      setFoodOption(response.data);
    })
    .catch((error) => {
        console.error("Server error", error);
    })
};

export default GetTotalFood;

GetTotalFood.Proptypes = {
    setFoodOption: PropTypes.string.isRequired,
};