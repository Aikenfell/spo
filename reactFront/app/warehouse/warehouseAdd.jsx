import { useState } from "react";
import axios from "axios";
import warehouseApi from "./warehouseApiConfig";

const WarehouseAdd = ({ listReload }) => {
  /* state definition  */
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [limitWarning, setLimitWarning] = useState(0);

  /* being handlers */
  async function save(event) {
    event.preventDefault();



    await warehouseApi.addWarehouse(
      name,
      location,
      capacity,
      limitWarning,
    )

    alert("entity Record Saved");
    // reset state
    setName("");
    setLocation("");
    setCapacity("");
    setLimitWarning(0);
    listReload();
  }
  return (
    <div className="container mt-4">

      <form>
        <div className="input-group">
          <button className="btn btn-outline-secondary" type="button" onClick={save}>Add Warehouse</button>
          <span className="input-group-text" id="">Name</span>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
          <span className="input-group-text" id="">Location</span>
          <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}></input>
          <span className="input-group-text" id="">Capacity</span>
          <input type="number" className="form-control" value={capacity} onChange={e => setCapacity(e.target.value)}></input>
          <span className="input-group-text" id="">Warning Limit</span>
          <input type="number" className="form-control" value={limitWarning} onChange={e => setLimitWarning(e.target.value)}></input>
        </div>
      </form>

    </div>
  );
};

export default WarehouseAdd;