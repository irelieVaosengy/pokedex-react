import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import {PokedexPage} from "./features/pokedex/pokedex.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
     <Header/>
    <Container className="layout_container">
        <Routes>
            <Route path="/" element={ <PokedexPage /> }></Route>
        </Routes>
    </Container>
    </div>
  );
}

export default App;
