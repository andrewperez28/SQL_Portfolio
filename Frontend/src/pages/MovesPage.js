import React from "react";
import MovesTable from "../components/MovesTable";
import CreateMoves from "../components/CreateMoves";
import UpdateMoves from "../components/UpdateMoves";
import DeleteMoves from "../components/DeleteMoves";

function MovesPage() {
  return (
    <>
      <h1>Table of Moves</h1>
      <MovesTable />
      <h2>Add, update, or delete Pokemon moves here</h2>
      <h3>
        Move name must be unique. PP must be a positive integer greater than 0.
        In order to update a current Move entry, you MUST fill-in all inputs of
        that specific entry. Otherwise, empty inputs will update to null
      </h3>
      <CreateMoves />
      <p>&nbsp;</p>
      <UpdateMoves />
      <p>&nbsp;</p>
      <DeleteMoves />
    </>
  );
}

export default MovesPage;
