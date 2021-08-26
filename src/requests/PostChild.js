/* eslint-disable no-console */

import axios from "axios";

const PostChild = ({ childName, schoolClass, foodOption, allergies }, setAlert) => {
    const endpoint = "https://cool-dinners.herokuapp.com/child";

    return axios
    .post(endpoint, {
        childName,
        schoolClass,
        foodOption,
        allergies
    })
    .then((response) => {
        if ((foodOption === "fish" && allergies === "fish") || (foodOption === "pizza" && allergies === "gluten") || (foodOption === "pizza" && allergies === "milk")|| (foodOption === "pasta" && allergies === "milk")) {
            setAlert({ message: "Food selected contains allergen products", isSuccess: false })
        } else if (allergies==="multiple") {
            setAlert({ message: "Please speak to your canteen staff regarding your allergies", isSuccess: false })
        } else {
        setAlert({
            message: "Child Added",
            isSuccess: true,
        });
        console.log(response);
    }
    })
    .catch((error) => {
        setAlert({
            message: "Server error, please try again later.",
            isSuccess: false,
        });
        console.error("Server error", error);
    });
};

export default PostChild