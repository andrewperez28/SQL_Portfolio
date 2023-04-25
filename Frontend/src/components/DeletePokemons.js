/*
Citation for the major adaptation of almost all the frontend technologies using Axios
Date: 03/15/2023
Adapted most of the frontend code from Youtuber PedroTech, CRUD Tutroial - ReactJS, NodeJS, MySQL Parts 1 - 3
Source URL: https://www.youtube.com/watch?v=T8mqZZ0r-RA
Source URL: https://www.youtube.com/watch?v=3YrOOia3-mo
Source URL: https://youtu.be/_S2GKnFpdtE

Citation for all the dropdown menus
Date: 03/15/2023
Adapated how to make dynamic dropdown menus with React from a post authored by Anthony DiPietrantonio on Dev.to
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

import React, { useState, useEffect } from "react";
import axios from "axios";

export const DeletePokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonID, setPokemonID] = useState("");

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemon/getAll")
      .then((response) => {
        setPokemonList(response.data);
      });
  }, [setPokemonList]);

  const deletePokemon = async (pokemonID) => {
    await axios
      .delete(
        `http://flip3.engr.oregonstate.edu:1958/pokemon/delete/${pokemonID}`
      )
      .then(alert("YOU DELETED THE POKEMON"), window.location.reload());
  };

  return (
    <>
      <legend>
        <strong>Delete a Pokemon</strong>
      </legend>
      <select onChange={(e) => setPokemonID(e.target.value)}>
        <option value="Select a Pokemon">Select a Pokemon to Delete</option>
        {pokemonList.map((val) => (
          <option value={val.pokemon_id}>{val.pokemon_name}</option>
        ))}
      </select>
      <button type="submit" onClick={() => deletePokemon(pokemonID)}>
        Delete the Move
      </button>
    </>
  );
};

export default DeletePokemons;
