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

import React, { useState } from "react";
import axios from "axios";
import typeArray from "./TypeArray";

export default function CreatePkmnNum() {
  const [dexId, setDexId] = useState("");
  const [dexName, setDexName] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [location, setLocation] = useState("");
  const listOfTypes = typeArray();

  const insertPkmnNum = async () => {
    const objectData = {
      dexId: dexId,
      dexName: dexName,
      type1: type1,
      type2: type2,
      location: location,
    };
    console.log(objectData);
    await axios.post(
      "http://flip3.engr.oregonstate.edu:1958/pokemonNumber/insert",
      objectData
    );
  };

  return (
    <>
      <form id="addPokemonNumbers">
        <legend>
          <strong>Add New Pokemon Number Entry</strong>
        </legend>
        <fieldset class="fields">
          <label>Pokedex ID</label>
          <input
            type="number"
            name="pokedex_id"
            id="pdex_id"
            size="3"
            maxlength="3"
            required
            placeholder="Number"
            value={dexId}
            onChange={(e) => setDexId(e.target.value)}
          />
          <label>Pokedex Name</label>
          <input
            type="text"
            name="real_name"
            id="pdex_name"
            maxlength="255"
            required
            placeholder="Real Pokemon Name"
            value={dexName}
            onChange={(e) => setDexName(e.target.value)}
          />
          <label>Type 1</label>
          <select onChange={(e) => setType1(e.target.value)}>
            <option value="Select a Type">Select Pokemon's Primary Type</option>
            {listOfTypes.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
          <label>Type 2</label>
          <select onChange={(e) => setType2(e.target.value)}>
            <option value="Select a Type">
              Select Pokemon's Secondary Type
            </option>
            {listOfTypes.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
          <label>Location</label>
          <input
            type="Text"
            name="location"
            id="pdex_location"
            maxlength="255"
            placeholder="Pokemon's Home"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={insertPkmnNum}>
          Add New Pokemon Number Entry
        </button>
      </form>
    </>
  );
}
