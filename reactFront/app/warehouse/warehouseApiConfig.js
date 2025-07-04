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

const addInventoryItem = (warehouse_id, name, sku, quantity, location, description, perishable,expiryDate) => {
  return axios.post(API_URL + "inventory/"+warehouse_id, {
      name,
      sku,
      quantity,
      location,
      description,
      perishable,
      expiryDate,
  });
};

const modifyInventoryItem = (itemID, name, sku, quantity, location, description, perishable,expiryDate) => {
  return axios.post(API_URL + "item/"+itemID, {
      name,
      sku,
      quantity,
      location,
      description,
      perishable,
      expiryDate,
  });
};

const deleteInventoryItem = (itemID) => {
  return axios.post(API_URL + "item/"+itemID+"/del", {
  });
};


const deleteSpecificWarehouse = (warehouseID) => {
  return axios.post(API_URL + "warehouse/"+warehouseID+"/del", {  });
};

const transferInventoryItem = (itemID, quantity, target) => {
  return axios.post(API_URL + "item/"+itemID+"/"+ target, {
      quantity,
  });
};


const modifySpecificWarehouse = (warehouseID, name, location, limitWarning) => {
  return axios.post(API_URL + "warehouse/"+warehouseID, {
      name, 
      location, 
      limitWarning,
  });
};

const getWarehouses = () => {
  return axios.get(API_URL + "warehouses", {  });
};

const getSpecificWarehouse = (warehouseID) => {
  return axios.get(API_URL + "warehouse/"+warehouseID, {  });
};

const getSpecificItemReference = (itemID) => {
  return axios.get(API_URL + "item/"+itemID, {  });
};

const getWarehouseInventory = (warehouseID) => {
  return axios.get(API_URL + "inventory/"+warehouseID, {  });
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
  getSpecificWarehouse,
  modifySpecificWarehouse,
  getSpecificItemReference, 
  transferInventoryItem,
  modifyInventoryItem,
  getWarehouseInventory,
  addInventoryItem,
  deleteInventoryItem,
  deleteSpecificWarehouse,
};

export default warehouseApi;