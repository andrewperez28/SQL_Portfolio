import React from "react";
import TrainersTable from "../components/TrainersTable";
import CreateTrainers from "../components/CreateTrainers";
import UpdateTrainers from "../components/UpdateTrainers";
import DeleteTrainers from "../components/DeleteTrainers";

function TrainersPage() {
  return (
    <>
      <h1>Table of Trainers</h1>
      <TrainersTable />
      <h2>Add, update, or delete Trainers here</h2>
      <h3>
        Trainer names must be unique. Number of badges must be positive
        integers. In order to update a current Trainer entry, you MUST fill-in
        all inputs of that specific entry. Otherwise, empty inputs will update
        to null.
      </h3>
      <CreateTrainers />
      <p>&nbsp;</p>
      <UpdateTrainers />
      <p>&nbsp;</p>
      <DeleteTrainers />
    </>
  );
}

export default TrainersPage;
