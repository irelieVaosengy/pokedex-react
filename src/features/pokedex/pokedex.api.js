import axios from 'axios'
import {gql} from "@apollo/client";
import PokedexTypes from "../../redux/actions/pokedex/pokedex.types";

/*
Remplacé par query graphQl pour éviter de faire des requetes dans une boucle car le API ne renvois pas de type ny d'évolution

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

function getErrorPayload(error){
    return  error.message && error.response.data.message
        ? error.response.data.message
        : error.message
}
*/

export const getPokemonById =  (pokemonId, dispatch) =>{
     return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
         dispatch({
             type: PokedexTypes.GET_POKEMON_SUCCESS,
             payload: response?.data,
         })

         return response.data
     });
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
