/* eslint-disable no-console */

import axios from "axios";

const PostOrder = ({ foodOption, schoolClass }, setAlert) => {
  const endpoint = "https://cool-dinners.herokuapp.com/canteen";

  return axios
    .post(endpoint, {
      foodOption,
      schoolClass,
    })
    .then(response => {
      setAlert({
        message: "Orders Added",
        isSuccess: true,
      });
      console.log(response);
    })
    .catch(error => {
      setAlert({
        message: "Server error, please try again later.",
        isSuccess: false,
      });
      console.error("Server error", error);
    });
};

export default PostOrder;
