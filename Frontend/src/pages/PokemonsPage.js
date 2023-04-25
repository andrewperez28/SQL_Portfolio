import React from "react";
import PokemonsTable from "../components/PokemonsTable";
import CreatePokemons from "../components/CreatePokemons";
import UpdatePokemons from "../components/UpdatePokemons";
import DeletePokemons from "../components/DeletePokemons";

function PokemonsPage() {
  return (
    <>
      <h1>Table of Pokemon</h1>
      <PokemonsTable />
      <h2>Add, update, and delete Pokemon here</h2>
      <h3>
        Level must be a positive integer. In order to update a current Pokemon
        entry, you MUST fill in all inputs of that specific entry. Otherwise,
        empty inputs will update to null.
      </h3>
      <CreatePokemons />
      <p>&nbsp;</p>
      <UpdatePokemons />
      <p>&nbsp;</p>
      <DeletePokemons />
    </>
  );
}

export default PokemonsPage;
