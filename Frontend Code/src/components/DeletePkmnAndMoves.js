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

export default function DeletePkmnAndMoves() {
  const [pmList, setPMList] = useState([]);
  const [pmID, setPMID] = useState("");

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/pokemonAndMoves/getAll")
      .then((response) => {
        setPMList(response.data);
        console.log(response.data);
      });
  }, [setPMList]);

  const deletePM = async (pmID) => {
    await axios
      .delete(
        `http://flip3.engr.oregonstate.edu:1958/pokemonAndMoves/delete/${pmID}`
      )
      .then(
        alert("YOU DELETED THE MOVE FROM THE POKEMON"),
        window.location.reload()
      );
  };

  return (
    <>
      <legend>Delete a move from a Pokemon</legend>
      <select onChange={(e) => setPMID(e.target.value)}>
        <option value="Select a PM ID">Select a PM ID</option>
        {pmList.map((val) => (
          <option value={val.pm_id}>{val.pm_id}</option>
        ))}
      </select>
      <button type="submit" onClick={() => deletePM(pmID)}>
        Delete This Move from the Pokemon
      </button>
    </>
  );
}
