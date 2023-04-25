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

export default function UpdatePokemons() {
  const [pokemonID, setPokemonID] = useState("");
  const [trainerID, setTrainerID] = useState("");
  const [pokedexID, setPokedexID] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [level, setLevel] = useState("");

  const [trainerList, setTrainerList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setTrainerList(response.data);
      });
  }, [setTrainerList]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemonNumber/getAll")
      .then((response) => {
        setPokedexList(response.data);
      });
  }, [setPokedexList]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemon/getAll")
      .then((response) => {
        setPokemonList(response.data);
      });
  }, [setPokemonList]);

  const updatePokemon = async () => {
    const objectData = {
      pokemonID: pokemonID,
      trainerID: trainerID,
      pokedexID: pokedexID,
      pokemonName: pokemonName,
      level: level,
    };
    console.log(objectData);
    await axios.put(
      "http://flip3.engr.oregonstate.edu:1958/pokemon/update",
      objectData
    );
  };

  return (
    <>
      <form id="addPokemonNumbers">
        <legend>
          <strong>Update Current Pokemon Entry</strong>
        </legend>
        <fieldset class="fields">
          <label>Select a current Pokemon ID to update</label>
          <select onChange={(e) => setPokemonID(e.target.value)}>
            <option value="Select a Pokemon ID">Select a Pokemon ID</option>
            {pokemonList.map((val) => (
              <option value={val.pokemon_id}>{val.pokemon_id}</option>
            ))}
          </select>
          <label>Select a Trainer</label>
          <select onChange={(e) => setTrainerID(e.target.value)}>
            <option value="Select a Trainer ID">
              Select a Trainer to Assign
            </option>
            {trainerList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>
          <label>Select a Pokemon from the Pokedex</label>
          <select onChange={(e) => setPokedexID(e.target.value)}>
            <option value="Select a Pokemon">
              Select a Pokemon Species to Assign
            </option>
            {pokedexList.map((val) => (
              <option value={val.pokedex_id}>{val.pokedex_name}</option>
            ))}
          </select>
          <label>Pokemon Name</label>
          <input
            type="Text"
            name="type_2"
            id="pdex_type_2"
            maxlength="255"
            placeholder="Trainer's Given Name"
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <label>Level</label>
          <input
            type="Number"
            name="location"
            id="pdex_location"
            maxlength="2"
            onChange={(e) => setLevel(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={updatePokemon}>
          Update New Pokemon Entry
        </button>
      </form>
    </>
  );
}
