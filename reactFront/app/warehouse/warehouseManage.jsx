// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import warehouseApi from "./warehouseApiConfig";
import WarehouseList from "./warehouseList";
import WarehouseAdd from "./warehouseAdd";
import WarehouseModify from "./warehouseModify";
import InventoryAdd from "./inventoryAdd";
import InventoryList from "./inventoryList";
import InventoryModify from "./inventoryModify";
import { useParams } from "react-router"

export default function homePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [focusedItem, setFocusedItem] = useState(0);
  const [warehouse, setWarehouse] = useState({});
  let params = useParams()

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    
    const result = await warehouseApi.getWarehouses();
    setWarehouses(result.data);
    const result2 = await warehouseApi.getSpecificWarehouse(params.warehouseID);
    setWarehouse(result2.data);
    const inventoryResponse = await warehouseApi.getWarehouseInventory(params.warehouseID);
    setInventory(inventoryResponse.data);
  }

  async function listReload() {
    const result = await warehouseApi.getWarehouses();
    setWarehouses(result.data);
    const result2 = await warehouseApi.getSpecificWarehouse(params.warehouseID);
    setWarehouse(result2.data);
    const inventoryResponse = await warehouseApi.getWarehouseInventory(params.warehouseID);
    setInventory(inventoryResponse.data);
  }

  function setFocus(target){
    setFocusedItem(target)

  }
  
  return (



    <div>


      <h1 className="text-center">{warehouse.name} : Warehouse Inventory Overview</h1>
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseWareHouseManagement" role="button" aria-expanded="false" aria-controls="collapseWareHouseManagement">
          Modify Warehouse Properties
        </a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseItemAddition" aria-expanded="false" aria-controls="collapseItemAddition">
          Add Item to Inventory
        </button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseItemModification" aria-expanded="false" aria-controls="collapseItemModification">
          Modify Focused Inventory Item
        </button>
      </p>
      <div class="collapse" id="collapseWareHouseManagement">
        <div class="card card-body">
      <WarehouseModify listReload={listReload} warehouseID={warehouse.id}  />
        </div>
      </div>
      <div class="collapse" id="collapseItemAddition">
        <div class="card card-body">
      <InventoryAdd listReload={listReload}  warehouse_id={warehouse.id} />
        </div>
      </div>
      <div class="collapse" id="collapseItemModification">
        <div class="card card-body">
      <InventoryModify listReload={listReload}  inventoryReferenceID={focusedItem} />
        </div>
      </div>
      {/* <ProjectCrud  entities={entities} /> */}
      <InventoryList InventoryItems={inventory} focusItem={setFocus}/>
    </div>
  );
}

export function meta({ }) {
  return [
    { title: "Warehouse Overview" },
    { name: "List of Active Warehouses", content: "" },
  ];
}
