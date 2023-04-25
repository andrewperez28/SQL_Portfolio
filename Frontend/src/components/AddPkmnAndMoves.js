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

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AddPkmnAndMoves() {
  const [pokemonID, setPokemonID] = useState();
  const [moveID, setMoveID] = useState();
  const [pokemonList, setPokemonList] = useState([]);
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemon/getAll")
      .then((response) => {
        setPokemonList(response.data);
        console.log(response.data);
      });
  }, [setPokemonList]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/moves/getAll")
      .then((response) => {
        setMoveList(response.data);
        console.log(response.data);
      });
  }, [setMoveList]);

  const assignMove = async () => {
    const dataObject = { pokemonID: pokemonID, moveID: moveID };
    axios
      .post(
        "http://flip3.engr.oregonstate.edu:1958/pokemonAndMoves/assignMove",
        dataObject
      )
      .then(
        alert("YOU ADDED A NEW MOVE TO THE POKEMON"),
        window.location.reload()
      );
  };

  return (
    <>
      <legend>Assign a move to a Pokemon</legend>
      <select onChange={(e) => setPokemonID(e.target.value)}>
        <option value="Select a Pokemon">Select a Pokemon</option>
        {pokemonList.map((val) => (
          <option value={val.pokemon_id}>{val.pokemon_name}</option>
        ))}
      </select>
      <select onChange={(e) => setMoveID(e.target.value)}>
        <option value="Select a Move">Select a Move</option>
        {moveList.map((val) => (
          <option value={val.move_id}>{val.move_name}</option>
        ))}
      </select>
      <button type="submit" onClick={assignMove}>
        Assign Move to Pokemon
      </button>
    </>
  );
}
