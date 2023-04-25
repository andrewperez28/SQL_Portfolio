import React from "react";
import PkmnandMovesTable from "../components/PkmnAndMovesTable";
import SelectPkmnMoves from "../components/SelectPkmnMoves";
import AddPkmnAndMoves from "../components/AddPkmnAndMoves";
import DeletePkmnAndMoves from "../components/DeletePkmnAndMoves";

export default function PkmnAndMovesPage() {
  return (
    <>
      <h1>Table of Pokemon and Their Moves</h1>
      <h2>
        Add or delete a Pokemon's move here. A Pokemon must not have duplicate
        moves.
      </h2>
      <PkmnandMovesTable />
      <p>&nbsp;</p>
      <SelectPkmnMoves />
      <p>&nbsp;</p>
      <AddPkmnAndMoves />
      <p>&nbsp;</p>
      <DeletePkmnAndMoves />
    </>
  );
}
