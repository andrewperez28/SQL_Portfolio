import React from "react";
import BattleRecordsTable from "../components/BattleRecordsTable";
import TandBRTable from "../components/TandBRTable";
import CreateBattleRecords from "../components/CreateBattleRecords";
import DeleteBattleRecords from "../components/DeleteBattleRecords";

function BattleRecordsPage() {
  return (
    <>
      <h1>Table of Battle Records</h1>
      <BattleRecordsTable />
      <h1>Table of Trainers and Battle Records</h1>
      <TandBRTable />
      <h2>Add or delete battle records here</h2>
      <h3>
        First trainer and second trainer may not be the same person. Date can
        only be current or past. Winner must be either the first trainer or
        second trainer. Updates are not allowed
      </h3>
      <CreateBattleRecords />

      <p>&nbsp;</p>
      <DeleteBattleRecords />
    </>
  );
}

export default BattleRecordsPage;
