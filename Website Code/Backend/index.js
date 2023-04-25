// DON'T FORGET TO TURN ON THE VPN FOR THIS TO WORK

/*
Citation for the major adaptation of almost all the backend technologies using Express, Cors, BodyParser
Date: 03/15/2023
Adapted most of the backend code from Youtuber PedroTech, CRUD Tutroial - ReactJS, NodeJS, MySQL Parts 1 - 3
Source URL: https://www.youtube.com/watch?v=T8mqZZ0r-RA
Source URL: https://www.youtube.com/watch?v=3YrOOia3-mo
Source URL: https://youtu.be/_S2GKnFpdtE

Citation for const BattleIDGet = `SELECT * FROM Battle_Records WHERE battle_id =(SELECT max(battle_id) FROM Battle_Records)`;
Date: 03/12/2023
Adapted the line of code above from a StackOverflow post answered by Ricardo Fercher
Source URL: https://stackoverflow.com/questions/5191503/how-to-select-the-last-record-of-a-table-in-sql
*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const PORT = 1958;

const db = mysql.createPool({
  connectionLimit: 10,
  host: "classmysql.engr.oregonstate.edu",
  user: "",
  password: "",
  database: "",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Trainers Backend Section
app.get("/trainers/getAll", (req, res) => {
  const trainersGetAll = "SELECT * FROM Trainers";
  db.query(trainersGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/trainers/insert", (req, res) => {
  const trainerName = req.body["trainerName"];
  const homeTown = req.body["homeTown"];
  const numBadges = req.body["numBadges"];
  const trainerType = req.body["trainerType"];
  console.log(req.body);

  const trainerInsert = `INSERT INTO Trainers(trainer_name, hometown, num_badge , trainer_type) VALUES("${trainerName}", "${homeTown}", "${numBadges}", "${trainerType}")`;
  db.query(
    trainerInsert,
    [trainerName, homeTown, numBadges, trainerType],
    (err, results) => {
      console.log(trainerInsert);
      console.log(results);
      console.log(err);
    }
  );
});

app.put("/trainers/update", (req, res) => {
  const trainerId = req.body["trainerId"];
  const trainerName = req.body["trainerName"];
  const homeTown = req.body["homeTown"];
  const numBadges = req.body["numBadges"];
  const trainerType = req.body["trainerType"];
  console.log(req.body);

  const trainerUpdate = `UPDATE Trainers SET trainer_name = "${trainerName}", hometown = "${homeTown}", num_badge = "${numBadges}", trainer_type = "${trainerType}" WHERE trainer_id = ${trainerId}`;
  db.query(
    trainerUpdate,
    [trainerId, trainerName, homeTown, numBadges, trainerType],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(trainerUpdate);
    }
  );
});

app.delete("/trainers/delete/:trainerId", (req, res) => {
  console.log(req);
  const trainerId = req.params.trainerId;
  console.log(trainerId);
  const trainerDelete = `DELETE FROM Trainers WHERE trainer_id = "${trainerId}"`;
  db.query(trainerDelete, [trainerId], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(trainerDelete);
  });
});
//End of Trainers Backend Section

//Pokemons Backend Section
app.get("/pokemon/getAll", (req, res) => {
  const pokemonsGetAll = "SELECT * FROM Pokemons";
  db.query(pokemonsGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/pokemon/insert", (req, res) => {
  const trainerID = req.body["trainerID"];
  const pokedexID = req.body["pokedexID"];
  const pokemonName = req.body["pokemonName"];
  const level = req.body["level"];
  console.log(req.body);

  const pokemonInsert = `INSERT INTO Pokemons(trainer_id, pokedex_id, pokemon_name, level) VALUES("${trainerID}", "${pokedexID}", "${pokemonName}", "${level}")`;
  db.query(
    pokemonInsert,
    [trainerID, pokedexID, pokemonName, level],
    (err, results) => {
      console.log(pokemonInsert);
      console.log(results);
      console.log(err);
    }
  );
});

app.put("/pokemon/update", (req, res) => {
  const pokemonID = req.body["pokemonID"];
  const trainerID = req.body["trainerID"];
  const pokedexID = req.body["pokedexID"];
  const pokemonName = req.body["pokemonName"];
  const level = req.body["level"];
  console.log(req.body);

  const pokemonUpdate = `UPDATE Pokemons SET trainer_id = "${trainerID}", pokedex_id = "${pokedexID}", pokemon_name = "${pokemonName}", level = "${level}" WHERE pokemon_id = ${pokemonID}`;
  db.query(
    pokemonUpdate,
    [pokemonID, trainerID, pokedexID, pokemonName, level],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(pokemonUpdate);
    }
  );
});

app.delete("/pokemon/delete/:pokemonID", (req, res) => {
  console.log(req);
  const pokemonID = req.params.pokemonID;
  console.log(pokemonID);
  const pokemonDelete = `DELETE FROM Pokemons WHERE pokemon_id = "${pokemonID}"`;
  db.query(pokemonDelete, [pokemonID], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(pokemonDelete);
  });
});
//End of Pokemons Backend Section

//Moves Backend Section
app.get("/moves/getAll", (req, res) => {
  const movesGetAll = "SELECT * FROM Moves";
  db.query(movesGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/moves/insert", (req, res) => {
  const moveName = req.body["moveName"];
  const moveEffect = req.body["moveEffect"];
  const moveType = req.body["moveType"];
  const pp = req.body["pp"];
  console.log(req.body);

  const moveInsert = `INSERT INTO Moves(move_name, move_effect, move_type , pp) VALUES("${moveName}", "${moveEffect}", "${moveType}", "${pp}")`;
  db.query(moveInsert, [moveName, moveEffect, moveType, pp], (err, results) => {
    console.log(moveInsert);
    console.log(results);
    console.log(err);
  });
});

app.put("/moves/update", (req, res) => {
  const moveId = req.body["moveId"];
  const moveName = req.body["moveName"];
  const moveEffect = req.body["moveEffect"];
  const moveType = req.body["moveType"];
  const pp = req.body["pp"];
  console.log(req.body);

  const moveUpdate = `UPDATE Moves SET move_name = "${moveName}", move_effect = "${moveEffect}", move_type = "${moveType}", pp = "${pp}" WHERE move_id = ${moveId}`;
  db.query(
    moveUpdate,
    [moveId, moveName, moveEffect, moveType, pp],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(moveUpdate);
    }
  );
});

app.delete("/moves/delete/:moveID", (req, res) => {
  console.log(req);
  const moveID = req.params.moveID;
  console.log(moveID);
  const moveDelete = `DELETE FROM Moves WHERE move_id = "${moveID}"`;
  db.query(moveDelete, [moveID], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(moveDelete);
  });
});
//End of Moves Backend Section

// Pokedex_Numbers Backend Section
app.get("/pokemonNumber/getAll", (req, res) => {
  const PokedexNumberGetAll = "SELECT * FROM Pokedex_Numbers";
  db.query(PokedexNumberGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/pokemonNumber/insert", (req, res) => {
  const dexId = req.body["dexId"];
  const dexName = req.body["dexName"];
  const type1 = req.body["type1"];
  const type2 = req.body["type2"];
  const location = req.body["location"];
  console.log(req.body);

  const PokedexNumberInsert = `INSERT INTO Pokedex_Numbers(pokedex_id, pokedex_name, type_1, type_2, location) VALUES("${dexId}", "${dexName}", "${type1}", "${type2}", "${location}")`;
  db.query(
    PokedexNumberInsert,
    [dexId, dexName, type1, type2, location],
    (err, results) => {
      console.log(PokedexNumberInsert);
      console.log(results);
      console.log(err);
    }
  );
});

app.put("/pokemonNumber/update", (req, res) => {
  const dexId = req.body["dexId"];
  const dexName = req.body["dexName"];
  const type1 = req.body["type1"];
  const type2 = req.body["type2"];
  const location = req.body["location"];
  console.log(req.body);

  const PokedexNumberUpdate = `UPDATE Pokedex_Numbers SET pokedex_name = "${dexName}", type_1 = "${type1}", type_2 = "${type2}", location = "${location}" WHERE pokedex_id = ${dexId}`;
  db.query(
    PokedexNumberUpdate,
    [dexId, dexName, type1, type2, location],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(PokedexNumberUpdate);
    }
  );
});
// End of Pokedex_Numbers Backend Section

// Trainers Backend Section
app.get("/trainers/getAll", (req, res) => {
  const trainersGetAll = "SELECT * FROM Trainers";
  db.query(trainersGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/trainers/insert", (req, res) => {
  const trainerName = req.body["trainerName"];
  const homeTown = req.body["homeTown"];
  const numBadges = req.body["numBadges"];
  const trainerType = req.body["trainerType"];
  console.log(`THIS IS numBADGES: ${numBadges}`);

  const trainerInsert = `INSERT INTO Trainers(trainer_name, hometown, num_badge, trainer_type) VALUES("${trainerName}", "${homeTown}", "${numBadges}", "${trainerType}")`;
  db.query(
    trainerInsert,
    [trainerName, homeTown, numBadges, trainerType],
    (err, results) => {
      console.log(trainerInsert);
      console.log(results);
      console.log(err);
    }
  );
});

app.put("/trainers/update", (req, res) => {
  const trainerId = req.body["trainerId"];
  const trainerName = req.body["trainerName"];
  const homeTown = req.body["homeTown"];
  const numBadges = req.body["numBadges"];
  const trainerType = req.body["trainerType"];
  console.log(req.body);

  const trainerUpdate = `UPDATE Trainers SET trainer_name = "${trainerName}", hometown = "${homeTown}", num_badge = "${numBadges}", trainer_type = "${trainerType}" WHERE trainer_id = ${trainerId}`;
  db.query(
    trainerUpdate,
    [trainerId, trainerName, homeTown, numBadges, trainerType],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(trainerUpdate);
    }
  );
});

app.delete("/trainers/delete/:trainerId", (req, res) => {
  console.log(req);
  const trainerId = req.params.trainerId;
  console.log(trainerId);
  const trainerDelete = `DELETE FROM Trainers WHERE trainer_id = "${trainerId}"`;
  db.query(trainerDelete, [trainerId], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(trainerDelete);
  });
});
// End of Trainers Backend Section

// Battle Records Backend Section
app.get("/battleRecords/getAll", (req, res) => {
  const BattleRecordsGetAll = "SELECT * FROM Battle_Records";
  db.query(BattleRecordsGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/battleRecords/insert", (req, res) => {
  const trainer1 = req.body["trainer1"];
  const trainer2 = req.body["trainer2"];
  const date = req.body["date"];
  const winner = req.body["winner"];
  console.log(req.body);

  const BattleRecordsInsert = `INSERT INTO Battle_Records(trainer_1, trainer_2, date, winner) VALUES("${trainer1}", "${trainer2}", "${date}", "${winner}")`;
  db.query(
    BattleRecordsInsert,
    [trainer1, trainer2, date, winner],
    (err, results) => {
      console.log(BattleRecordsInsert);
      console.log(results);
      console.log(err);
    }
  );

  const BattleIDGet = `SELECT * FROM Battle_Records WHERE battle_id =(SELECT max(battle_id) FROM Battle_Records)`; // SEE CITATION ABOVE

  db.query(BattleIDGet, [trainer1, trainer2, date, winner], (err, result) => {
    console.log(BattleIDGet);
    console.log(result);
    console.log(err);
    const battleIDResults = JSON.parse(JSON.stringify(result))[0]["battle_id"];
    console.log(`THIS IS THE battleIDRESULTS: ${battleIDResults}`);

    const TandBRInsert1 = `INSERT INTO Trainers_and_Battle_Records(battle_id, trainer_id) VALUES("${battleIDResults}", "${trainer1}")`;
    db.query(TandBRInsert1, [battleIDResults, trainer1], (err, results) => {
      console.log(TandBRInsert1);
      console.log(results);
      console.log(err);
    });

    const TandBRInsert2 = `INSERT INTO Trainers_and_Battle_Records(battle_id, trainer_id) VALUES("${battleIDResults}", "${trainer2}")`;
    db.query(TandBRInsert2, [battleIDResults, trainer2], (err, results) => {
      console.log(TandBRInsert2);
      console.log(results);
      console.log(err);
    });
  });
});

app.put("/battleRecords/update", (req, res) => {
  const battleRecordId = req.body["battleRecordId"];
  const trainer1 = req.body["trainer1"];
  const trainer2 = req.body["trainer2"];
  const date = req.body["date"];
  const winner = req.body["winner"];
  console.log(req.body);

  const BattleRecordsUpdate = `UPDATE Battle_Records SET trainer_1 = "${trainer1}", trainer_2 = "${trainer2}", date = "${date}", winner = "${winner}" WHERE battle_id = ${battleRecordId}`;
  db.query(
    BattleRecordsUpdate,
    [battleRecordId, trainer1, trainer2, date, winner],
    (err, result) => {
      console.log(err);
      console.log(result);
      console.log(BattleRecordsUpdate);
    }
  );
});

app.delete("/battleRecords/delete/:battleRecordId", (req, res) => {
  console.log(req);
  const battleRecordId = req.params.battleRecordId;
  console.log(battleRecordId);
  const battleRecordsDelete = `DELETE FROM Battle_Records WHERE battle_id = "${battleRecordId}"`;
  const deleteFromTAndBR = `DELETE FROM Trainers_and_Battle_Records WHERE battle_id = "${battleRecordId}"`;
  db.query(battleRecordsDelete, [battleRecordId], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(battleRecordsDelete);
  });
  db.query(deleteFromTAndBR, [battleRecordId], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(deleteFromTAndBR);
  });
});
// End of Battle Records Backend Section

//Trainers and Battle Records Backend Section
app.get("/trainersAndBattleRecords/getAll", (req, res) => {
  const TandBRGetAll = "SELECT * FROM Trainers_and_Battle_Records";
  db.query(TandBRGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/trainersAndBattleRecords/insert", (req, res) => {
  const trainerId = req.body["trainerId"];
  const TandBRId = req.body["TandBRId"];
  console.log(req.body);

  const TandBRInsert = `INSERT INTO Trainers_and_Battle_Records(trainer_id, battle_id) VALUES("${trainerId}", "${TandBRId}")`;
  db.query(TandBRInsert, [trainerId, TandBRId], (err, results) => {
    console.log(TandBRInsert);
    console.log(results);
    console.log(err);
  });
});

app.put("/trainersAndBattleRecords/update", (req, res) => {
  const trainerId = req.body["trainerId"];
  const TandBRId = req.body["TandBRId"];
  console.log(req.body);

  const TandBRUpdate = `UPDATE Trainers_and_Battle_Records SET trainer_id = "${trainerId}", battle_id = "${TandBRId}" WHERE battle_id = ${TandBRId}`;
  db.query(TandBRUpdate, [trainerId, TandBRId], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(TandBRUpdate);
  });
});
// End of Trainers and Battle Records Backend Section

// Pokemons and Moves Backend Section
app.get("/pokemonAndMoves/getAll", (req, res) => {
  const TandBRGetAll = "SELECT * FROM Pokemons_and_Moves";
  db.query(TandBRGetAll, (err, result) => {
    res.send(result);
  });
});

app.post("/pokemonAndMoves/getSelect", (req, res) => {
  const pokemonID = req.body["pokemonID"];
  const pmSelect = `SELECT * FROM Moves INNER JOIN Pokemons_and_Moves ON Pokemons_and_Moves.move_id = Moves.move_id WHERE Pokemons_and_Moves.pokemon_id = "${pokemonID}"`;
  db.query(pmSelect, [pokemonID], (err, result) => {
    res.send(result);
  });
});

app.post("/pokemonAndMoves/assignMove", (req, res) => {
  const pokemonID = req.body["pokemonID"];
  const moveID = req.body["moveID"];
  const assignMove = `INSERT INTO Pokemons_and_Moves(pokemon_id, move_id)
  VALUES("${pokemonID}", "${moveID}")`;
  db.query(assignMove, [pokemonID, moveID], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(assignMove);
  });
});

app.delete("/pokemonAndMoves/delete/:pmID", (req, res) => {
  console.log(req);
  const pmID = req.params.pmID;
  console.log(pmID);
  const pmDelete = `DELETE FROM Pokemons_and_Moves WHERE pm_id = "${pmID}"`;
  db.query(pmDelete, [pmID], (err, result) => {
    console.log(err);
    console.log(result);
    console.log(pmDelete);
  });
});
// End of Pokemons and Moves Backend Section

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
