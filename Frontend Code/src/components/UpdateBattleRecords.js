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

export const UpdateBattleRecords = () => {
  const [battleRecordId, setBattleRecordId] = useState("");
  const [trainer1, setTrainer1] = useState("");
  const [trainer2, setTrainer2] = useState("");
  const [date, setDate] = useState("");
  const [winner, setWinner] = useState("");

  const [battleRecordsList, setbattleRecordsList] = useState([]);
  const [battleRecordsList2, setbattleRecordsList2] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/battleRecords/getAll")
      .then((response) => {
        setbattleRecordsList(response.data);
      });
  }, [setbattleRecordsList]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setbattleRecordsList2(response.data);
      });
  }, [setbattleRecordsList2]);

  const updateBattleRecords = async () => {
    const objectData = {
      battleRecordId: battleRecordId,
      trainer1: trainer1,
      trainer2: trainer2,
      date: date,
      winner: winner,
    };
    console.log(objectData);
    await axios
      .put("http://flip3.engr.oregonstate.edu:1958/update", objectData)
      .then(alert("Battle Record Updated"), window.location.reload());
  };

  return (
    <>
      <form id="updatebattleRecords">
        <legend>
          <strong>Update Current Battle Records Entry</strong>
        </legend>
        <fieldset>
          <select onChange={(e) => setBattleRecordId(e.target.value)}>
            <option value="Select a Battle ID">
              Select a Battle ID to Update
            </option>
            {battleRecordsList.map((val) => (
              <option value={val.battle_id}>{val.battle_id}</option>
            ))}
          </select>

          <select onChange={(e) => setBattleRecordId(e.target.value)}>
            <option value="Select Trainer 1">Select the first trainer</option>
            {battleRecordsList2.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>

          <select onChange={(e) => setBattleRecordId(e.target.value)}>
            <option value="Select Trainer 2">Select the second trainer</option>
            {battleRecordsList2.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>

          <label> Date </label>
          <input
            type="text"
            name="date"
            id="date_update"
            maxlength="255"
            placeholder="Date of Battle"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select onChange={(e) => setBattleRecordId(e.target.value)}>
            <option value="Select The Winner">Select the Winner</option>
            {battleRecordsList2.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>
        </fieldset>
        <button
          type="submit"
          onClick={updateBattleRecords}
          id="updateBattleRecords"
        >
          Update Battle Records Entry
        </button>
      </form>
    </>
  );
};

export default UpdateBattleRecords;
