import pokedexTypes from "../../actions/pokedex/pokedex.types";

const initialState = {
    pokemons : {}
}

export default (state = initialState , action) => {
    switch (action.type) {
        case pokedexTypes.GET_POKEMON_SUCCESS:
        {
            const list = {...state.pokemons}
            list[action.payload.id.toString()] = action.payload
            const newState = {
                ...state,
                pokemons: list
            }

            return newState
        }
           break;
        default:
            return state;
    }
};
