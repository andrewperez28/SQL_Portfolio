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

export const DeleteBattleRecords = () => {
  const [battleRecordList, setBattleRecordList] = useState([]);
  const [battleRecordId, setBattleRecordId] = useState("");

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/battleRecords/getAll")
      .then((response) => {
        setBattleRecordList(response.data);
      });
  }, [setBattleRecordList]);

  const deleteBattleRecord = async (battleRecordId) => {
    await axios
      .delete(
        `http://flip3.engr.oregonstate.edu:1958/battleRecords/delete/${battleRecordId}`
      )
      .then(alert("YOU DELETED THE BATTLE RECORD"), window.location.reload());
  };

  return (
    <>
      <legend>
        <strong>Delete a Battle Record</strong>
      </legend>
      <select onChange={(e) => setBattleRecordId(e.target.value)}>
        <option value="Select a Battle Record ID">
          Select a Battle Record ID to Delete
        </option>
        {battleRecordList.map((val) => (
          <option value={val.battle_id}>{val.battle_id}</option>
        ))}
      </select>
      <button type="submit" onClick={() => deleteBattleRecord(battleRecordId)}>
        Delete the Battle Record
      </button>
    </>
  );
};

export default DeleteBattleRecords;
