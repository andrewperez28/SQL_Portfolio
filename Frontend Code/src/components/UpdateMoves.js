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
import effectArray from "./EffectArray";

export const UpdateMoves = () => {
  const [moveId, setMoveId] = useState("");
  const [moveName, setMoveName] = useState("");
  const [moveEffect, setMoveEffect] = useState("");
  const [moveType, setMoveType] = useState("");
  const [pp, setPP] = useState("");

  const [moveList, setMoveList] = useState([]);
  const listOfTypes = typeArray();
  const listOfEffects = effectArray();

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/moves/getAll")
      .then((response) => {
        setMoveList(response.data);
      });
  }, [setMoveList]);

  const updateMove = async () => {
    const objectData = {
      moveId: moveId,
      moveName: moveName,
      moveEffect: moveEffect,
      moveType: moveType,
      pp: pp,
    };
    console.log(objectData);
    await axios.put(
      "http://flip3.engr.oregonstate.edu:1958/moves/update",
      objectData
    );
  };

  return (
    <>
      <form id="updatePkmnNumbers">
        <legend>
          <strong>Update Current Move Entry</strong>
        </legend>
        <fieldset>
          <select onChange={(e) => setMoveId(e.target.value)}>
            <option value="Select a Move">Select a Move to Update</option>
            {moveList.map((val) => (
              <option value={val.move_id}>{val.move_name}</option>
            ))}
          </select>

          <label>Move Name</label>
          <input
            type="text"
            name="real_name"
            id="pdex_name_edit"
            maxlength="255"
            placeholder="Move Name"
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
            id="pdex_location_edit"
            maxlength="2"
            placeholder="Number"
            onChange={(e) => setPP(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={updateMove} id="updatepokemonnumber">
          Update Move Entry
        </button>
      </form>
    </>
  );
};

export default UpdateMoves;
