import PokedexTypes from "./pokedex.types";

export const getPokemons =  async () =>  {
    return {
        type : PokedexTypes.GET_POKEMONS
    };
}

export const getPokemonsSuccess = (technologies) => ({
    type : PokedexTypes.GET_POKEMONS_SUCCESS,
    payload: technologies
});

export const getPokemonsFailure = (error) => ({
    type : PokedexTypes.GET_POKEMONS_FAILURE,
    payload: error
});

export const getAwesomeNinja = async (searchBuzWord) => ({
    type : PokedexTypes.GET_AWESOME_NINJA,
    payload: searchBuzWord
});

export const getAwesomeNinjaSuccess = (awesomeNinja) => ({
    type : PokedexTypes.GET_AWESOME_NINJA,
    payload: awesomeNinja
});

export const getAwesomeNinjaFailure = (error) => ({
    type : PokedexTypes.GET_AWESOME_NINJA,
    payload: error
});
