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

export const UpdateTrainers = () => {
  const [trainerId, setTrainerId] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [numBadges, setNumBadges] = useState("");
  const [trainerType, setTrainerType] = useState("");

  const [trainerList, setTrainerList] = useState([]);

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setTrainerList(response.data);
      });
  }, [setTrainerList]);

  const updateTrainer = async () => {
    const objectData = {
      trainerId: trainerId,
      trainerName: trainerName,
      homeTown: homeTown,
      numBadges: numBadges,
      trainerType: trainerType,
    };
    console.log(objectData);
    await axios
      .put("http://flip3.engr.oregonstate.edu:1958/trainers/update", objectData)
      .then(alert("Trainer Updated"), window.location.reload());
  };

  return (
    <>
      <form id="updateTrainers">
        <legend>
          <strong>Update Current Trainer Entry</strong>
        </legend>
        <fieldset>
          <select onChange={(e) => setTrainerId(e.target.value)}>
            <option value="Select a Trainer">Select a Trainer to Update</option>
            {trainerList.map((val) => (
              <option value={val.trainer_id}>{val.trainer_name}</option>
            ))}
          </select>

          <label> Trainer Name </label>
          <input
            type="text"
            name="trainerName"
            id="trainer_name"
            maxlength="255"
            placeholder="Trainer Name"
            onChange={(e) => setTrainerName(e.target.value)}
          />
          <label> Hometown </label>
          <input
            type="Text"
            name="hometown"
            id="home_town"
            maxlength="255"
            placeholder="Hometown"
            onChange={(e) => setHomeTown(e.target.value)}
          />
          <label> Number of Badges </label>
          <input
            type="Number"
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
        <button type="submit" onClick={updateTrainer} id="updateTrainers">
          Update Trainer Entry
        </button>
      </form>
    </>
  );
};

export default UpdateTrainers;
