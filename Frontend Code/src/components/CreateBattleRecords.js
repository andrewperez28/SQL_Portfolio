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

export default function BattleRecordsPage() {
  const [battleRecordId, setbattleRecordId] = useState("");
  const [trainer1, setTrainer1] = useState("");
  const [trainer2, setTrainer2] = useState("");
  const [date, setDate] = useState("");
  const [winner, setWinner] = useState("");

  const [battleRecordsList, setbattleRecordsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setbattleRecordsList(response.data);
      });
  }, [setbattleRecordsList]);

  const insertBattleRecords = async () => {
    const objectData = {
      battleRecordId: battleRecordId,
      trainer1: trainer1,
      trainer2: trainer2,
      date: date,
      winner: winner,
    };
    console.log(objectData);
    await axios.post(
      "http://flip3.engr.oregonstate.edu:1958/battleRecords/insert",
      objectData
    );
  };

  return (
    <>
      <form id="addBattleRecords">
        <legend>
          <strong>Add New Battle Records Entry</strong>
        </legend>
        <fieldset class="fields">
          <select onChange={(e) => setTrainer1(e.target.value)}>
            <option value="Select a Trainer 1">Select the first trainer</option>
            {battleRecordsList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>

          <select onChange={(e) => setTrainer2(e.target.value)}>
            <option value="Select a Trainer 2">
              Select the second trainer
            </option>
            {battleRecordsList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>

          <label> Date </label>
          <input
            type="date"
            name="date"
            id="date"
            maxlength="10"
            placeholder="Date of Battle"
            onChange={(e) => setDate(e.target.value)}
          />

          <select onChange={(e) => setWinner(e.target.value)}>
            <option value="Select a Winner">Select the Winner</option>
            {battleRecordsList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>
        </fieldset>
        <button type="submit" onClick={insertBattleRecords}>
          Add New Battle Record Entry
        </button>
      </form>
    </>
  );
}
