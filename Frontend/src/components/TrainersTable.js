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
import TrainersTableRow from "./TrainersTableRow";

function TrainersTable() {
  const [trainersList, setTrainersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setTrainersList(response.data);
        console.log(response.data);
      });
  }, [setTrainersList]);

  return (
    <table>
      <thead>
        <tr>
          <th>Trainer ID</th>
          <th>Trainer Name</th>
          <th>Hometown</th>
          <th>Number of Badges</th>
          <th>Trainer Type</th>
        </tr>
      </thead>
      <tbody>
        {trainersList.map((trainersEntry, i) => (
          <TrainersTableRow trainersEntry={trainersEntry} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default TrainersTable;
