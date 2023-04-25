--CREATE new trainer into database by adding new row into Trainer table.
INSERT INTO Trainers(trainer_name, hometown, num_badge, trainer_type)
VALUES(:trainerNameInput, :hometownInput, :num_badgeInput, :trainer_typeInput);

--CREATE new Pokemon into database by adding new row on Pokemons Table
INSERT INTO Pokemons(trainer_id, pokedex_id, pokemon_name, level)
VALUES(:trainerIDInput, :pokedexIDInput, :pokemonNameInput, :levelInput);

--CREATE new Pokedex Number into database by adding new row on Pokedex_Numbers Table
INSERT INTO Pokedex_Number(pokedex_id, pokedex_name, type_1, type_2, location)
VALUES(:pokedexIDInput, :pokedexNameInput, :type1Input, :type2Input, :locationInput);

--CREATE new move into database by adding new row on Moves Table
INSERT INTO Moves(move_name, move_effect, move_type, pp)
VALUES(:moveNameInput, :moveEffectInput, :moveTypeInput, :ppInput);

--CREATE new battle record into database on Battle_Records Table. Associating two trainers with a battle record (M:M relationship)
INSERT INTO Battle_Records(trainer_1, trainer_2, date, winner)
VALUES(:trainer1Input, :trainer2Input, :dateInput, :winnerInput);

--CREATE new row for Pokemons_and_Moves Table. Associating a specific pokemon with a move. (M:M relationship)
INSERT INTO Pokemons_and_Moves(pokemon_id, move_id)
VALUES(:pokemonIDInput, :moveIDInput);

--CREATE new row for Trainers_and_Battle_Records. Dependent on Battle_Records and Trainers table as it's a M:M relationship
INSERT INTO Trainers_and_Battle_Records(trainer_id, battle_id)
VALUES(:trainerIDInput, :battleIDInput);

--READ all rows on Trainers Table
SELECT * FROM Trainers;

--READ all rows on Pokemons table 
SELECT * FROM Pokemons;

--READ all rows on Pokedex_Numbers Table
SELECT * FROM Pokedex_Numbers;

--Show all moves associated with a pokemon
SELECT * FROM Moves
INNER JOIN Pokemons_and_Moves
ON Pokemons_and_Moves.move_id = Moves.move_id 
WHERE Pokemons_and_Moves.pokemon_id = :pokemon_id;

--READ all rows on Moves Table
SELECT * FROM Moves;

--READ all rows on Battle_Records Table
SELECT * FROM Battle_Records;

--READ all rows on Pokemons_and_Moves Table
SELECT * FROM Pokemons_and_Moves;

--READ all rows on Trainers_and_Battle_Records table
SELECT * FROM Trainers_and_Battle_Records;

--Update query for Trainers Table
UPDATE Trainers 
SET trainer_name = :trainerNameInput, 
hometown = :hometownInput, num_badge = :num_badgeInput, trainer_type = :trainer_typeInput
WHERE trainer_id = selectedTrainerID;

--Update query for Pokemons Table
UPDATE Pokemons 
SET trainer_id = :trainerIDInput, 
pokemon_name = :pokemonNameInput, 
level = :levelInput
WHERE pokemon_id = selectedPokemonID;

--Update query for Pokedex_Numbers Table
UPDATE Pokedex_Numbers 
SET pokedex_name = :PokedexNameInput, 
location = :locationInput
WHERE pokedex_id = selectedPokedexID;

--Update query for Moves Table
UPDATE Moves 
SET move_name = :moveNameInput, 
move_effect = :moveEffectInput, 
move_type = :moveTypeInput, 
pp = :ppInput
WHERE move_id = selectedMovesID;

----------------------------------------------------------------------------------------------------------

-- Delete query for Trainers Table
DELETE FROM Trainers
WHERE trainer_id = :selectedTrainerID;

-- Delete query for Pokemons Table
DELETE FROM Pokemons
WHERE pokemon_id = :selectedPokemonID;

-- Delete query for Battle_Records Table
DELETE FROM Battle_Records
WHERE battle_id = :selectedBattleID;

-- Delete query for Pokedex_Numbers Table
DELETE FROM Pokedex_Numbers
WHERE pokedex_id = :selectedPokedexID;

-- Delete query for Moves Table
DELETE FROM Moves
WHERE move_id = :selectedMoveID;

-- Delete query for Pokemons_and_Moves Table
DELETE FROM Pokemons_and_Moves
WHERE pokemon_id = :selectedPokemonID AND move_id = selectedMoveID;

