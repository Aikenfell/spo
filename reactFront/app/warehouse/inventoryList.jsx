import React, { useState } from "react";
const InventoryList = ({ InventoryItems, focusItem }) => {

    const [searchTerm, setSearchTerm] = useState("");





  // console.log(wareHouses)
  return (
    <div>
            <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">SKU</th>
          <th scope="col">Quantity</th>
          <th scope="col">Perishable</th>
          <th scope="col">Expiration Date</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {InventoryItems
            .filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
      .map((InventoryItems, index) => {
        return (
          <tbody key={InventoryItems.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{InventoryItems.name}</td>
              <td>{InventoryItems.location}</td>
              <td>{InventoryItems.sku}</td>
              <td>{InventoryItems.quantity}</td>
              <td>{InventoryItems.occupied}</td>
              <td>{InventoryItems.capacity}</td>
              <td>
                <a
                  type="button"
                  className="btn btn-warning"
                  onClick={() => focusItem(InventoryItems.id)}
                >
                  Focus Item
                </a>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  // onClick={() => deleteEntity(wareHouses.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
    </div>
  );
};

export default InventoryList;