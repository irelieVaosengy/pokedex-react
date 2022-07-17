import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getPokemonsList} from "./pokedex.api";
import PokemonsList from "../../components/pokemons/pokemons-list.component";

export function PokedexPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchPokemonsData()
    }, [])

    const fetchPokemonsData = async () =>{
        await getPokemonsList(dispatch)
    }

    return (
        <PokemonsList />
    );
}
