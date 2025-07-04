// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import warehouseApi from "./warehouseApiConfig";
import WarehouseList from "./warehouseList";
import WarehouseAdd from "./warehouseAdd";


export default function homePage() {
  const [warehouses, setWarehouses] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await warehouseApi.getWarehouses();
    setWarehouses(result.data);
  }

  async function listReload() {
    const result = await warehouseApi.getWarehouses();
    setWarehouses(result.data);
  }

  return (



    <div>


      <h1 className="text-center">Warehouse Overview</h1>
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Add New Warehouse
        </a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
      <WarehouseAdd listReload={listReload}  />
        </div>
      </div>
      {/* <ProjectCrud  entities={entities} /> */}
      <WarehouseList wareHouses={warehouses} />
    </div>
  );
}

export function meta({ }) {
  return [
    { title: "Warehouse Overview" },
    { name: "List of Active Warehouses", content: "" },
  ];
}
