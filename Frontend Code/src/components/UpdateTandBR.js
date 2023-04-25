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

export const UpdateTandBR = () => {
  const [trainerId, setTrainerId] = useState("");
  const [battleId, setBattleId] = useState("");

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

  const updateTandBR = async () => {
    const objectData = {
      trainerId: trainerId,
      battleId: battleId,
    };
    console.log(objectData);
    await axios.put(
      "http://flip3.engr.oregonstate.edu:1958/trainersAndBattleRecords/update",
      objectData
    );
  };

  return (
    <>
      <form id="updateTandBR">
        <legend>
          <strong> Update Battle Records for Trainers </strong>
        </legend>
        <fieldset>
          <select onChange={(e) => setTrainerId(e.target.value)}>
            <option value="Select a Trainer ID">
              Select a Trainer ID to Update
            </option>
            {tandBRList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_id}</option>
            ))}
          </select>

          <select onChange={(e) => setBattleId(e.target.value)}>
            <option value=" Select a Battle ID ">
              Select a Battle ID to Update
            </option>
            {tandBRList.map((val) => (
              <option value={val.battle_id}>{val.battle_id}</option>
            ))}
          </select>
        </fieldset>
        <button type="submit" onClick={updateTandBR} id="updateTandBR">
          Update Battle Records for Trainers
        </button>
      </form>
    </>
  );
};

export default UpdateTandBR;
