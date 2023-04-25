SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

--Create Trainers table
CREATE OR REPLACE Table Trainers (
    trainer_id INT AUTO_INCREMENT,
    trainer_name VARCHAR(255) NOT NULL UNIQUE,
    hometown VARCHAR(255) NOT NULL,
    num_badge INT,
    trainer_type VARCHAR(255) NOT NULL,
    PRIMARY KEY (trainer_id)
);

--Create Battle_Records table
CREATE OR REPLACE TABLE Battle_Records (
    battle_id INT AUTO_INCREMENT,
    trainer_1 INT,
    trainer_2 INT,
    date DATE NOT NULL,
    winner INT,
    FOREIGN KEY (trainer_1) REFERENCES Trainers(trainer_id) ON DELETE CASCADE,
    FOREIGN KEY (trainer_2) REFERENCES Trainers(trainer_id) ON DELETE CASCADE,
    FOREIGN KEY (WINNER) REFERENCES Trainers(trainer_id) ON DELETE CASCADE,
    PRIMARY KEY (battle_id)
);

--Create Trainers_and_Battle_Records (Intersection Table)
CREATE OR REPLACE TABLE Trainers_and_Battle_Records (
    trainer_battle_id INT AUTO_INCREMENT,
    trainer_id INT,
    battle_id INT,
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id) ON DELETE CASCADE,
    FOREIGN KEY (battle_id) REFERENCES Battle_Records(battle_id) ON DELETE CASCADE,
    PRIMARY KEY (trainer_battle_id)
);

--Create Pokemons table
CREATE OR REPLACE Table Pokemons (
    pokemon_id int AUTO_INCREMENT,
    trainer_id int,
    pokedex_id int NOT NULL,
    pokemon_name VARCHAR(255) NOT NULL,
    level int NOT NULL,
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id) ON DELETE SET NULL,
    FOREIGN KEY (pokedex_id) REFERENCES Pokedex_Numbers(pokedex_id),
    PRIMARY KEY(pokemon_id)
);

--Create Pokedex_Numbers table
Create OR REPLACE Table Pokedex_Numbers (
    pokedex_id int UNIQUE,
    pokedex_name VARCHAR(255) NOT NULL UNIQUE,
    type_1 VARCHAR(255) NOT NULL,
    type_2 VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (pokedex_id)
);

--Create Moves table
Create OR REPLACE Table Moves (
    move_id int AUTO_INCREMENT PRIMARY KEY,
    move_name VARCHAR(255) NOT NULL UNIQUE,
    move_effect VARCHAR(255) NOT NULL,
    move_type VARCHAR(255) NOT NULL,
    pp int NOT NULL
);

Create OR REPLACE Table Pokemons_and_Moves (
    pm_id int AUTO_INCREMENT PRIMARY KEY,
    pokemon_id int,
    move_id int,
    FOREIGN KEY (pokemon_id) REFERENCES Pokemons(pokemon_id) ON DELETE CASCADE,
    FOREIGN KEY (move_id) REFERENCES Moves(move_id) ON DELETE CASCADE
);

INSERT INTO Pokedex_Numbers (pokedex_id, pokedex_name, type_1, type_2, location)
VALUES (25, "Pikachu", "Electric", NULL, "Viridian Forest"),
(9, "Blastoise", "Water", NULL, "Silver Falls"),
(95, "Onix", "Rock", "Ground", "Rock Tunnel");

INSERT INTO Moves (move_name, move_effect, move_type, pp)
VALUES("Thunderbolt", "Special Damage", "Electric", 15),
("Hydro Pump", "Special Damage", "Water", 5),
("Poison Powder", "Poison Status", "Poison", 30),
("Dynamic Punch", "Physical Damage", "Fighting", 5),
("Hyper Beam", "Special Damage", "Normal", 5);

INSERT INTO Pokemons (trainer_id, pokedex_id, pokemon_name, level)
VALUES (1, 25, "Pikachu", 80),
(2, 9, "Blastoise", 90),
(3, 95, "Rocky", 24);

--- INSERT INTO Trainer TABLE
INSERT INTO Trainers (trainer_name, hometown, num_badge, trainer_type)
VALUES ('Ash Ketchum', 'Pallet Town', '3', 'Adventurer'),
('Gary Oak', 'Pallet Town', '3', 'Adventurer'),
('Brock', 'Pewter City', '2', 'Adventurer');

-- INSERT INTO "Trainers and Battle Records" TABLE
INSERT INTO Trainers_and_Battle_Records (trainer_id, battle_id)
VALUES ('1', '1'),
('2', '1'),
('2', '2'),
('3', '2'),
('1', '3'),
('3', '3');

-- INSERT INTO "Pokemons and Moves" TABLE
INSERT INTO Pokemons_and_Moves (pokemon_id, move_id)
VALUES ('1', '1'),
('2', '2'),
('3', '3');

-- INSERT INTO "Battle Records" TABLE
INSERT INTO Battle_Records (trainer_1, trainer_2, date, winner)
VALUES ('1', '2', "2022-02-01", '1'),
('2', '3', "2022-02-02", '3'),
('1', '3', "2022-02-03", '1');

SET FOREIGN_KEY_CHECKS=1;
COMMIT;