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

export const DeleteTrainers = () => {
  const [trainerList, setTrainerList] = useState([]);
  const [trainerId, setTrainerId] = useState("");

  useEffect(() => {
    axios
      .get("http://flip3.engr.oregonstate.edu:1958/trainers/getAll")
      .then((response) => {
        setTrainerList(response.data);
      });
  }, [setTrainerList]);

  const deleteTrainer = async (trainerId) => {
    await axios
      .delete(
        `http://flip3.engr.oregonstate.edu:1958/trainers/delete/${trainerId}`
      )
      .then(alert("YOU DELETED THE TRAINER"), window.location.reload());
  };

  return (
    <>
      <legend>
        <strong>Delete a Trainer</strong>
      </legend>
      <select onChange={(e) => setTrainerId(e.target.value)}>
        <option value="Select a Trainer">Select a Trainer to Delete</option>
        {trainerList.map((val) => (
          <option value={val.trainer_id}>{val.trainer_name}</option>
        ))}
      </select>
      <button type="submit" onClick={() => deleteTrainer(trainerId)}>
        Delete the Trainer
      </button>
    </>
  );
};

export default DeleteTrainers;
