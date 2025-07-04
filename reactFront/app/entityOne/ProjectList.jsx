import React from "react";

const ProjectList = ({ entities, editEntity, deleteEntity }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Published</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {entities.map((entityOne, index) => {
        return (
          <tbody key={entityOne.entityOne}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{entityOne.propertyOne}</td>
              <td>{entityOne.propertyTwo}</td>
              <td>{entityOne.propertyThree}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editEntity(entityOne)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteEntity(entityOne.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProjectList;