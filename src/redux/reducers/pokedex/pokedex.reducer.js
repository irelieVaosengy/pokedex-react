import PokedexTypes from "../../actions/pokedex/pokedex.types";

const initialState = {
    pokemons : []
}

export default (state = initialState , action) => {
    switch (action.type) {
        case PokedexTypes.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            };
        default:
            return state;
    }
};
