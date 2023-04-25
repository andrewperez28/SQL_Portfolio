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

export default function CreatePkmnNum() {
  const [trainerId, setTrainerId] = useState("");
  const [TandBRId, setTandBRId] = useState("");

  const insertTandBR = async () => {
    const objectData = {
      trainerId: trainerId,
      TandBRId: TandBRId,
    };
    console.log(objectData);
    await axios.post(
      "http://flip3.engr.oregonstate.edu:1958/trainersAndBattleRecords/insert",
      objectData
    );
  };

  return (
    <>
      <form id="addTandBR">
        <legend>
          <strong> Add Trainers and Battle Records </strong>
        </legend>
        <fieldset class="fields">
          <label> Trainer ID </label>
          <input
            type="number"
            name="trainer_id"
            id="trainer_id"
            size="3"
            maxlength="3"
            required
            placeholder="1"
            value={trainerId}
            onChange={(e) => setTrainerId(e.target.value)}
          />
          <label> Battle ID </label>
          <input
            type="number"
            name="battle_id"
            id="battle_id"
            maxlength="3"
            required
            placeholder="1"
            value={TandBRId}
            onChange={(e) => setTandBRId(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={insertTandBR}>
          Add New Entry
        </button>
      </form>
    </>
  );
}
