import {createSelector} from "reselect";

export const globalState = state => state.pokedexReducer

export const pokedexState = state => state.pokedexReducer

export const selectPokemons = createSelector(
    [ globalState ],
    (state) => {
        return state.pokemons
    }
);
