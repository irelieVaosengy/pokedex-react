import PokedexTypes from "./pokedex.types";

export const getPokemonSuccess =  async (pokemon) =>  {
    return {
        type : PokedexTypes.GET_POKEMON_SUCCESS,
        payload: pokemon
    };
}
