import axios from 'axios'
import PokedexTypes from "../../redux/actions/pokedex/pokedex.types";

export const getPokemonsList = async (dispatch, queryParams={}) =>{
    const DEFAULT_PARAMS = {offset: 0, limit: 150}
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, { params: {...DEFAULT_PARAMS , ...queryParams} });
        console.log('response', response)
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
