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
import typeArray from "./TypeArray";

export const UpdatePkmnNum = () => {
  const [dexId, setDexId] = useState("");
  const [dexName, setDexName] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [location, setLocation] = useState("");
  const listOfTypes = typeArray();

  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemonNumber/getAll")
      .then((response) => {
        setPokedexList(response.data);
      });
  }, [setPokedexList]);

  const updatePokemonNumber = async () => {
    const objectData = {
      dexId: dexId,
      dexName: dexName,
      type1: type1,
      type2: type2,
      location: location,
    };
    console.log(objectData);
    await axios.put(
      "http://flip3.engr.oregonstate.edu:1958/pokemonNumber/update",
      objectData
    );
  };

  return (
    <>
      <form id="updatePkmnNumbers">
        <legend>
          <strong>Update Current Pokemon Number Entry</strong>
        </legend>
        <fieldset>
          <select onChange={(e) => setDexId(e.target.value)}>
            <option value="Select a Pokemon">
              Select a Pokedex Entry to Update
            </option>
            {pokedexList.map((val) => (
              <option value={val.pokedex_id}>{val.pokedex_name}</option>
            ))}
          </select>

          <label>Pokedex Name</label>
          <input
            type="text"
            name="real_name"
            id="pdex_name_edit"
            maxlength="255"
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
            id="pdex_location_edit"
            maxlength="255"
            placeholder="Pokemon's Home"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </fieldset>
        <button
          type="submit"
          onClick={updatePokemonNumber}
          id="updatepokemonnumber"
        >
          Update Pokemon Number Entry
        </button>
      </form>
    </>
  );
};

export default UpdatePkmnNum;
