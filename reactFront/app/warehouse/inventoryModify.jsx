import { useEffect, useState } from "react";
import axios from "axios";
import warehouseApi from "./warehouseApiConfig";

const InventoryModify = ({ listReload, inventoryReferenceID }) => {
  /* state definition  */
  useEffect(() => {
    (async () => await load())();
  }, []);
  async function load() {
    console.log("Reloading")
    const result = await warehouseApi.getSpecificItemReference(inventoryReferenceID);
    if (result.data) {
      setName(result.data.name);
      setLocation(result.data.location);
      setSku(result.data.sku);
      setQuantity(result.data.quantity);
      setPerishable(result.data.perishable);
      setExpiryDate(result.data.expiryDate);
      console.log(result.data);
      setItemID(result.data.id);
      setOldQuantity(result.data.quantity);
    }

    const targets = await warehouseApi.getWarehouses();
    var wareHouses = [];
    console.log(targets.data);
    targets.data.forEach(element => {
      wareHouses.push([element.id,element.name,element.occupied])
    });
    setTargetWarehouses(wareHouses);
    console.log(targetWarehouses);


    console.log("Reloaded")

    // setLimitWarning(result.data.limitWarning);
    // console.log(result2.data);
    // warehouse = result2.data;
  }

  async function update() {
    console.log("Reloading")
    if (inventoryReferenceID) {
    const result = await warehouseApi.getSpecificItemReference(inventoryReferenceID);
      setName(result.data.name);
      setLocation(result.data.location);
      setSku(result.data.sku);
      setQuantity(result.data.quantity);
      setPerishable(result.data.perishable);
      setExpiryDate(result.data.expiryDate);
      console.log(result.data);
      setItemID(result.data.id);
      setOldQuantity(result.data.quantity);
    }
    const targets = await warehouseApi.getWarehouses();
    var wareHouses = [];
    console.log(targets.data);
    targets.data.forEach(element => {
      wareHouses.push([element.id,element.name,element.occupied])
    });
    setTargetWarehouses(wareHouses);
    console.log(targetWarehouses);

    console.log("Reloaded")

    // setLimitWarning(result.data.limitWarning);
    // console.log(result2.data);
    // warehouse = result2.data;
  }


  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [perishable, setPerishable] = useState(false);
  const [expiryDate, setExpiryDate] = useState(null);
  const [itemID, setItemID] = useState(0);
  const [oldQuantity, setOldQuantity] = useState(0);
  const [targetWarehouses, setTargetWarehouses] = useState([]);
  const [transferHouse, setTransferHouse] = useState([]);

  /* being handlers */
  async function save(event) {
    event.preventDefault();

    // if (!window.confirm("Delete the item?")) {
    //   console.log("Cancelling Deletion")
    //   return
    // }
    // if (!window.confirm("A Duplicate SKU Has been detected proceed with addition?")) {
    //   console.log("Cancelling Deletion")
    //   return
    // }


    await warehouseApi.modifyInventoryItem(
      itemID,
      name,
      sku,
      quantity,
      location,
      description,
      perishable,
      expiryDate,
    )

    alert("entity Record Saved");
    // reset state
    setName("");
    setLocation("");
    listReload();
  }  
  async function transfer(event) {
    event.preventDefault();
    await warehouseApi.transferInventoryItem(
      itemID,
      quantity,
      transferHouse,
    )

    alert("Item Transferred");
    // reset state
  }

  return (
    <div className="container mt-4">

      <form className="">
        <button className="btn btn-outline-secondary " type="button" onClick={update}>Update Focus Data - {itemID}</button>
        <button className="btn btn-outline-secondary " type="button" onClick={save}>Submit Modifications</button>
        <div className="input-group d-flex flex-column-md flex-row">
          <span className="input-group-text" id="">Item Name</span>
          <input type="text" className="form-control" disabled value={name} onChange={e => setName(e.target.value)}></input>
          <span className="input-group-text" id="">SKU</span>
          <input type="text" className="form-control" disabled value={sku} onChange={e => setSku(e.target.value)}></input>
        </div>
        <div className="input-group d-flex flex-column-md flex-row">
          <span className="input-group-text" id="">Quantity</span>
          <input type="number" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
          <span className="input-group-text" id="">Location In Warehouse</span>
          <input type="text" className="form-control" value={location} onChange={e => setLocation(e.target.value)}></input>
        </div>
        <div className="input-group d-flex flex-column-md flex-row">
          {/* <span className="input-group-text" id="">Perishable</span>
          <input type="checkbox" className="form-control" value={perishable} onChange={e => setPerishable(e.target.value)}></input> */}
          <span className="input-group-text" id="">Expiration Date</span>
          <input type="date" className="form-control" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}></input>
        </div>
        <div className="input-group d-flex flex-row">
          <span className="input-group-text" id="">Description</span>
          <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>

        </div>
 
        <div className="input-group d-flex flex-row">
        <button className="btn btn-outline-secondary " type="button" onClick={update}>Transfer To Eligible Warehouse</button>
          <select className="form-control" value={transferHouse} onChange={e => setTransferHouse(e.target.value)}>
    {targetWarehouses.map((element, index) => <option key={element[0]} value={element[0]}>{element[1]} : {element[2]}</option>
    )}
    </select>
        </div>
 
      </form>

    </div>
  );
};

export default InventoryModify;