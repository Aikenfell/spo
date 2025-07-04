import axios from "axios";

const API_URL = "http://localhost:8020/";

const addWarehouse = (name, location, capacity, limitWarning) => {
  return axios.post(API_URL + "warehouse", {
      name, 
      location, 
      capacity,
      limitWarning,
  });
};

const getWarehouses = () => {
  return axios.get(API_URL + "warehouses", {  });
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
  addWarehouse,
  getWarehouses,
};

export default warehouseApi;