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

import React from "react";

function PkmnNumsTableRow({ pkmnNumsEntry }) {
  return (
    <tr>
      <td>{pkmnNumsEntry.pokedex_id}</td>
      <td>{pkmnNumsEntry.pokedex_name}</td>
      <td>{pkmnNumsEntry.type_1}</td>
      <td>{pkmnNumsEntry.type_2}</td>
      <td>{pkmnNumsEntry.location}</td>
    </tr>
  );
}

export default PkmnNumsTableRow;
