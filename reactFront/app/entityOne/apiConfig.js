import axios from "axios";

const API_URL = "http://localhost:8020/";

const addEntityInstance = (propertyOne, propertyTwo, propertyThree) => {
  return axios.post(API_URL + "entityOne", {
    propertyOne,
    propertyTwo,
    propertyThree,
  });
};

const getEntityInstances = () => {
  return axios.get(API_URL + "entityOne", {  });
};

// const login = (username, password) => {
//   return axios
//     .post(API_URL + "signin", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };


const warehouseApi = {
  addEntityInstance,
  getEntityInstances,
};

export default warehouseApi;