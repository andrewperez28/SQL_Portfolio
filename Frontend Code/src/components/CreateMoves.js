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
import effectArray from "./EffectArray";

export default function MovesPage() {
  const [moveName, setMoveName] = useState("");
  const [moveEffect, setMoveEffect] = useState("");
  const [moveType, setMoveType] = useState("");
  const [pp, setPP] = useState("");
  const listOfTypes = typeArray();
  const listOfEffects = effectArray();

  const insertMove = async () => {
    const objectData = {
      moveName: moveName,
      moveEffect: moveEffect,
      moveType: moveType,
      pp: pp,
    };
    console.log(objectData);
    await axios.post(
      "http://flip3.engr.oregonstate.edu:1958/moves/insert",
      objectData
    );
  };

  return (
    <>
      <form id="addPokemonNumbers">
        <legend>
          <strong>Add New Move Entry</strong>
        </legend>
        <fieldset class="fields">
          <label>Move Name</label>
          <input
            type="text"
            name="moves_name"
            id="move_name"
            maxlength="255"
            required
            placeholder="Move name(Mandatory)"
            onChange={(e) => setMoveName(e.target.value)}
          />
          <label>Move Effect</label>
          <select onChange={(e) => setMoveEffect(e.target.value)}>
            <option value="Select a Type">Select a Move Effect</option>
            {listOfEffects.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
          <label>Move Type</label>
          <select onChange={(e) => setMoveType(e.target.value)}>
            <option value="Select a Type">Select a Type</option>
            {listOfTypes.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
          <label>PP</label>
          <input
            type="Number"
            name="location"
            id="pdex_location"
            placeholder="Number"
            maxlength="2"
            onChange={(e) => setPP(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={insertMove}>
          Add New Move Entry
        </button>
      </form>
    </>
  );
}
