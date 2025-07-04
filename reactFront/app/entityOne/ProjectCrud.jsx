import { useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import warehouseApi from "./apiConfig";  

const ProjectCrud = ({ entities }) => {
/* state definition  */
  const [id, setId] = useState("");
  const [propertyOne, setPropertyOne] = useState("");
  const [propertyTwo, setPropertyTwo] = useState("");
  const [propertyThree, setPropertyThree] = useState("");

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await warehouseApi.addEntityInstance(
      propertyOne, 
      propertyTwo, 
      propertyThree

    )

    alert("entity Record Saved");
    // reset state
    setId("");
    setPropertyOne("");
    setPropertyTwo("");
    setPropertyThree("");
  }
  async function editEntity(entities) {
    setPropertyOne(entities.propertyOne);
    setPropertyTwo(entities.propertyTwo);
    setPropertyThree(entities.propertyThree);
    // setId(entities.id);
  }

  async function deleteEntity(id) {
    await api.delete("/delete/" + id);
    alert("Publisher Details Deleted Successfully");
    load();
  }

  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Publisher Details No Found");
    await axios.put("/update", {
      id: id,
      name: name,
      email: email,
      published: published,
    });
    alert("Publisher Details Updated");
    // reset state
    setId("");
    setName("");
    setEmail("");
    setPublished("");
  }
  /* end handlers */

/* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            hidden
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <label>propertyOne</label>
          <input
            type="text"
            className="form-control"
            value={propertyOne}
            onChange={e => setPropertyOne(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>propertyTwo</label>
          <input
            type="text"
            className="form-control"
            value={propertyTwo}
            onChange={e => setPropertyTwo(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col-4">
            <label>propertyThree</label>
            <input
              type="text"
              className="form-control"
              value={propertyThree}
              placeholder="propertyThree"
              onChange={e => setPropertyThree(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Add Entity
          </button>
          <button className="btn btn-warning m-4" onClick={update}>
            Update
          </button>
        </div>
      </form>
      <ProjectList
        entities={entities}
        editEntity={editEntity}
        deleteEntity={deleteEntity}
      />
    </div>
  );
};

export default ProjectCrud;