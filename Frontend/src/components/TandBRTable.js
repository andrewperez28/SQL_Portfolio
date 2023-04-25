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
import TandBRTableRow from "./TandBRTableRow";

function TandBRTable() {
  const [tandBRList, setTandBRList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://flip3.engr.oregonstate.edu:1958/trainersAndBattleRecords/getAll"
      )
      .then((response) => {
        setTandBRList(response.data);
      });
  }, [setTandBRList]);

  return (
    <table>
      <thead>
        <tr>
          <th> Trainer ID</th>
          <th> Battle ID</th>
        </tr>
      </thead>
      <tbody>
        {tandBRList.map((tandBREntry, i) => (
          <TandBRTableRow tandBREntry={tandBREntry} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default TandBRTable;
