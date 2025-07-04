// import type { Route } from "./+types/home";
import type { Route } from "../+types/root";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";
import ProjectCrud from "./ProjectCrud";



export default  function homePage() {
  const [publishers, setPublishers] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    // const result = await api.get("/all");
    // setPublishers(result.data);
    setPublishers([]);
  }

  return (



    <div>


      <h1 className="text-center">List Of Publisher</h1>
      <ProjectCrud load={load} publishers={publishers} />
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skillstorm Project" },
    { name: "description", content: "Landing Page" },
  ];
}
function Home() {
  return <Welcome />;
}
