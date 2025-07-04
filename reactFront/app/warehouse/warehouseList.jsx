import React, { useState } from "react";
const WarehouseList = ({ wareHouses }) => {
  // console.log(wareHouses)
      const [searchTerm, setSearchTerm] = useState("");
  return (
     <div>
            <input
        type="text"
        placeholder="Search by name or city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Occupied</th>
          <th scope="col">Capacity</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {wareHouses
                  .filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
      .map((wareHouses, index) => {
        return (
          <tbody key={wareHouses.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{wareHouses.name}</td>
              <td>{wareHouses.location}</td>
              <td>{wareHouses.occupied}</td>
              <td>{wareHouses.capacity}</td>
              <td>
                <a
                  type="button"
                  className="btn btn-warning"
                  href={"warehouse/"+wareHouses.id}
                  // onClick={() => editEntity(wareHouses)}
                >
                  Manage Warehouse
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

export default WarehouseList;