import React from "react";

function Home() {
  return (
    <>
      <h1>
        You are now logged into the official Kanto Pokemon database. Authorized
        personnel of the Kanto Pokemon League only. Follow the links above to
        make changes to the database.
      </h1>
      <h2>
        <ul>Trainers: Edit the Trainers table</ul>
      </h2>
      <h2>
        <ul>Pokemon: Edit the Pokemons table</ul>
      </h2>
      <h2>
        <ul>Pokedex Numbers: Edit the Pokedex_Numbers table</ul>
      </h2>
      <h2>
        <ul>Moves: Edit the Moves table</ul>
      </h2>
      <h2>
        <ul>
          Assign Moves to Pokemon: Edit the Pokemons_and_Moves intersection
          table
        </ul>
      </h2>
      <h2>
        <ul>Battle Records: Edit the Battle Records table</ul>
      </h2>
      <p>&nbsp;</p>
      <h1>
        <u>IMPORTANT NOTES FOR AUTHORIZED PERSONNEL</u>
      </h1>
      <h2>
        <ul>
          YOU MUST READ AND FOLLOW ALL DIRECTIONS ON EACH PAGE BEFORE PERFORMING
          EDITS
        </ul>
      </h2>
      <h2>
        <ul>
          Trainers_and_Battle_Records intersection table can be viewed on Battle
          Records page.
        </ul>
      </h2>
      <h2>
        <ul>Trainers and Pokemon have a 1:M relationship.</ul>
      </h2>
      <h2>
        <ul>Pokedex_Numbers and Pokemon have a 1:M relationship.</ul>
      </h2>
      <h2>
        <ul>Pokemon and Moves have a M:N relationship.</ul>
      </h2>
      <h2>
        <ul>Trainers and Battle Records have a M:N relationship.</ul>
      </h2>
      <h2>
        <uL>
          Certain CRUD operations are restricted to Level 3 database personnel.
          You will not have access to them on this website.
        </uL>
      </h2>
    </>
  );
}

export default Home;
