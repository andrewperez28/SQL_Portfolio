import React from "react";
import CreatePkmnNum from "../components/CreatePkmnNum";
import PokemonNumbersTable from "../components/PkmnNumsTable";
import UpdatePkmnNum from "../components/UpdatePkmnNum";

function PokemonNumbersPage() {
  return (
    <>
      <h1>Table of Pokedex Entries</h1>
      <PokemonNumbersTable />
      <h2>Add or update Pokedex entries here</h2>
      <h3>
        Pokedex ID must be unique and a positive integer that is greater than 0.
        Pokedex name must be unique. Deletions are not allowed. In order to
        update a current Pokedex entry, you MUST fill-in all inputs of that
        specific entry. Otherwise, empty inputs will update to null. When
        updating, Type 1 MUST be present. Type 2 cannot exist without a current
        Type 1.
      </h3>
      <CreatePkmnNum />
      <p>&nbsp;</p>
      <UpdatePkmnNum />
    </>
  );
}

export default PokemonNumbersPage;
