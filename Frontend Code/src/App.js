import React from "react";
import "./App.css";
import Home from "./pages/Home";
import PokemonsPage from "./pages/PokemonsPage";
import PokemonNumbersPage from "./pages/PokemonNumbersPage";
import MovesPage from "./pages/MovesPage";
import TrainersPage from "./pages/TrainersPage";
import BattleRecordsPage from "./pages/BattleRecordsPage";
import PkmnAndMovesPage from "./pages/PkmnAndMovesPage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>WELCOME TO THE OFFICIAL KANTO POKEMON DATABASE</h1>
        </header>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/pokemon" element={<PokemonsPage />}></Route>
          <Route path="/pokemonNumber" element={<PokemonNumbersPage />}></Route>
          <Route path="/moves" element={<MovesPage />}></Route>
          <Route path="/trainers" element={<TrainersPage />}></Route>
          <Route path="/battleRecords" element={<BattleRecordsPage />}></Route>
          <Route path="/pokemonAndMoves" element={<PkmnAndMovesPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
