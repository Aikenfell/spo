// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import ProjectCrud from "./ProjectCrud";
import warehouseApi from "./apiConfig";


export default  function homePage() {
  const [entities, setEntities] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await warehouseApi.getWarehouses();
    setEntities(result.data);
  }

  return (



    <div>


      <h1 className="text-center">List Of Entities</h1>
      <ProjectCrud  entities={entities} />
    </div>
  );
}

export function meta({}) {
  return [
    { title: "Entity One" },
    { name: "Add and View Entity One", content: "Add Entity One Instance and View Entity One Instances" },
  ];
}
