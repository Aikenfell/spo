import { useEffect, useState } from "react";
import axios from "axios";
import warehouseApi from "./warehouseApiConfig";

const WarehouseModify = ({ listReload, warehouseID }) => {
  /* state definition  */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await warehouseApi.getSpecificWarehouse(999);
    setName(result.data.name);
    setLocation(result.data.location);
    setLimitWarning(result.data.limitWarning);
    // console.log(result2.data);
    // warehouse = result2.data;
  }

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [limitWarning, setLimitWarning] = useState(0);

  // /* being handlers */
  async function save(event) {
    event.preventDefault();
    await warehouseApi.modifySpecificWarehouse(
      warehouseID,
      name,
      location,
      limitWarning,
    )

    alert("entity Record Saved");
    // reset state
    listReload();
  }

  return (
    <div className="container mt-4">

      <form>
        <div className="input-group">
          <button className="btn btn-outline-secondary" type="button" onClick={save}>Modify Warehouse with changes</button>
          <span className="input-group-text" id="">Name</span>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
          <span className="input-group-text" id="">Location</span>
          <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}></input>
          <span className="input-group-text" id="">Warning Limit</span>
          <input type="number" className="form-control" value={limitWarning} onChange={e => setLimitWarning(e.target.value)}></input>
        </div>
      </form>

    </div>
  );
};

export default WarehouseModify;