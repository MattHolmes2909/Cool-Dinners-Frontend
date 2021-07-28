import axios from "axios";

const getData = () => {
    
    let endpoint = "https://cool-dinners.herokuapp.com/child";
    
    return axios
    .get(endpoint)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
        console.error("Server error", error);
    })
};
export default getData;
