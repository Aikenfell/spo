import { useState } from "react";
import axios from "axios";
import warehouseApi from "./warehouseApiConfig";
import { useParams } from "react-router"

const InventoryAdd = ({ listReload, warehouse_id }) => {
  /* state definition  */
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [perishable, setPerishable] = useState(false);
  const [expiryDate, setExpiryDate] = useState(null);
  let params = useParams();

  /* being handlers */
  async function save(event) {
    event.preventDefault();

    var skuDupe = false;
    const inventoryData = await warehouseApi.getWarehouseInventory(params.warehouseID)
    inventoryData.data.forEach(element => {
      console.log(element.sku,sku)
      if (element.sku == sku) {
        skuDupe = true;

      }
    });


    if (skuDupe) {
      if (!window.confirm("A Duplicate SKU Has been detected proceed with addition?")) {
        // console.log("Cancelling Deletion")
        return
      }

    }



    await warehouseApi.addInventoryItem(
      warehouse_id,
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

  return (
    <div className="container mt-4">

      <form className="">
        <button className="btn btn-outline-secondary " type="button" onClick={save}>Add Item to Warehouse Inventory</button>
        <div className="input-group d-flex flex-column-md flex-row">
          <span className="input-group-text" id="">Item Name</span>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
          <span className="input-group-text" id="">SKU</span>
          <input type="text" className="form-control" value={sku} onChange={e => setSku(e.target.value)}></input>
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
      </form>

    </div>
  );
};

export default InventoryAdd;