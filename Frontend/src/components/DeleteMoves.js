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

export const DeleteMoves = () => {
  const [moveList, setMoveList] = useState([]);
  const [moveID, setMoveID] = useState("");

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/moves/getAll")
      .then((response) => {
        setMoveList(response.data);
      });
  }, [setMoveList]);

  const deleteMove = async (moveID) => {
    await axios
      .delete(`http://flip3.engr.oregonstate.edu:1958/moves/delete/${moveID}`)
      .then(alert("YOU DELETED THE MOVE"), window.location.reload());
  };

  return (
    <>
      <legend>
        <strong>Delete a Move</strong>
      </legend>
      <select onChange={(e) => setMoveID(e.target.value)}>
        <option value="Select a Move">Select a Move to Delete</option>
        {moveList.map((val) => (
          <option value={val.move_id}>{val.move_name}</option>
        ))}
      </select>
      <button type="submit" onClick={() => deleteMove(moveID)}>
        Delete the Move
      </button>
    </>
  );
};

export default DeleteMoves;
