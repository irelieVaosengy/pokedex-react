import axios from 'axios'
import PokedexTypes from "../../redux/actions/pokedex/pokedex.types";
import {gql} from "@apollo/client";

export const getPokemonsList = async (dispatch, queryParams={}) =>{
    const DEFAULT_PARAMS = {offset: 0, limit: 150}
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, { params: {...DEFAULT_PARAMS , ...queryParams} });
        dispatch({
            type: PokedexTypes.GET_POKEMONS_SUCCESS,
            payload: response?.data,
        })
    } catch (error) {
        dispatch({
            type: PokedexTypes.GET_POKEMONS_FAILURE,
            payload: getErrorPayload(error),
        })
    }
}

export const getPokemonById =  (pokemonId) =>{
     return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
         return response.data
     });
}

function getErrorPayload(error){
    return  error.message && error.response.data.message
        ? error.response.data.message
        : error.message
}

export function getPokemonsQuery(offset = 0) {
    return gql(`{
        pokemon_v2_pokemon(limit: 150, offset: ${offset}) {
            name
            id
            pokemon_v2_pokemontypes {
              id
              pokemon_v2_type {
                name
                pokemonV2PokemonevolutionsByPartyTypeId {
                  id
                  pokemon_v2_gender {
                    id
                    name
                  }
                  pokemon_v2_location {
                    id
                    name
                  }
                }
              }
            }
            weight
            pokemon_v2_pokemonsprites {
              id
              sprites
            }
        }
      }
    `)
}
