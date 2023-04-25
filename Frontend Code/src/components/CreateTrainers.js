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

export default function TrainersPage() {
  const [trainerId, setTrainerId] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [homeTown, sethomeTown] = useState("");
  const [numBadges, setNumBadges] = useState("");
  const [trainerType, setTrainerType] = useState("");

  const insertTrainer = async () => {
    const objectData = {
      trainerId: trainerId,
      trainerName: trainerName,
      homeTown: homeTown,
      numBadges: numBadges,
      trainerType: trainerType,
    };
    console.log(objectData);
    await axios
      .post(
        "http://flip3.engr.oregonstate.edu:1958/trainers/insert",
        objectData
      )
      .then(alert("Trainer Added"), window.location.reload());
  };

  return (
    <>
      <form id="addTrainers">
        <legend>
          <strong>Add New Trainer Entry</strong>
        </legend>
        <fieldset class="fields">
          <label> Trainer Name </label>
          <input
            type="Text"
            name="trainer_name"
            id="trainer_name"
            maxlength="255"
            required
            placeholder=" Name "
            onChange={(e) => setTrainerName(e.target.value)}
          />
          <label> Hometown </label>
          <input
            type="Text"
            name="home_town"
            id="home_towns"
            maxlength="255"
            required
            placeholder="Hometown "
            onChange={(e) => sethomeTown(e.target.value)}
          />
          <label> Number of Badges </label>
          <input
            type="Number"
            name="home_town"
            id="home_towns"
            maxlength="255"
            required
            placeholder="Number of Badges"
            onChange={(e) => setNumBadges(e.target.value)}
          />
          <label>Trainer Type</label>
          <input
            type="Text"
            name="home_town"
            id="home_towns"
            maxlength="255"
            required
            placeholder="Trainer Type"
            onChange={(e) => setTrainerType(e.target.value)}
          />
        </fieldset>
        <button type="submit" onClick={insertTrainer}>
          Add New Trainer Entry
        </button>
      </form>
    </>
  );
}
