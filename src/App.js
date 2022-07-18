import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import {PokedexPage} from "./features/pokedex/pokedex.component";
import Header from "./components/header/header.component";
import {PokemonFiche} from "./features/pokedex/pokemon-fiche.component";

function App() {
  return (
    <div className="App">
     <Header/>
    <Container className="app__container">
        <Routes>
            <Route path="/" element={ <PokedexPage /> }></Route>
            <Route path="/pokemon/:id" element={ <PokemonFiche /> }></Route>
        </Routes>
    </Container>
    </div>
  );
}

export default App;
