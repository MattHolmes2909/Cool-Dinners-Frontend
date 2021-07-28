import axios from "axios";

const getData = () => {
    
    let endpoint = "https://cool-dinners.herokuapp.com/child";
    
    return axios
    .get(endpoint)
    .then((response) => {
      // handle success
      console.log(response.data);
    })
    .catch((error) => {
        setAlert({
            message: "Server error. Please try again later.",
            isSuccess: false,
        });
        console.error("Server error", error);
    })
};

export default getData;
