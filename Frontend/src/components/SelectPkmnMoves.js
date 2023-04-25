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
import MovesTableRow from "./MovesTableRow";
import axios from "axios";

export default function SelectPkmnMoves() {
  const [pokemonID, setPokemonID] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pmQuery, setPMQuery] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemon/getAll")
      .then((response) => {
        setPokemonList(response.data);
        console.log(response.data);
      });
  }, [setPokemonList]);

  const pmSelect = async () => {
    const pkmnSelected = { pokemonID: pokemonID };
    console.log(pkmnSelected);
    await axios
      .post(
        "http://flip3.engr.oregonstate.edu:1958/pokemonAndMoves/getSelect",
        pkmnSelected
      )
      .then((response) => {
        setPMQuery(response.data);
        console.log(response.data);
      });
  };

  return (
    <>
      <legend>Return Pokemon's Known Moves</legend>
      <select onChange={(e) => setPokemonID(e.target.value)}>
        <option value="Select a Pokemon">Select a Pokemon</option>
        {pokemonList.map((val) => (
          <option value={val.pokemon_id}>{val.pokemon_name}</option>
        ))}
      </select>
      <button type="submit" onClick={pmSelect}>
        Return All Moves
      </button>
      <p>&nbsp;</p>
      <table>
        <thead>
          <tr>
            <th>Move ID</th>
            <th>Name</th>
            <th>Effect</th>
            <th>Type</th>
            <th>Power Points</th>
          </tr>
        </thead>
        <tbody>
          {pmQuery.map((movesEntry, i) => (
            <MovesTableRow movesEntry={movesEntry} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}
