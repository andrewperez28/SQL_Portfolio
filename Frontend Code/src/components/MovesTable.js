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
import MovesTableRow from "./MovesTableRow";

function MovesTable() {
  const [movesList, setMovesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/moves/getAll")
      .then((response) => {
        setMovesList(response.data);
        console.log(response.data);
      });
  }, [setMovesList]);

  return (
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
        {movesList.map((movesEntry, i) => (
          <MovesTableRow movesEntry={movesEntry} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default MovesTable;
