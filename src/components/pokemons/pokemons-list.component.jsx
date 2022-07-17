import React, {useEffect} from  'react';
import {createStructuredSelector} from "reselect";
import {connect, useDispatch} from "react-redux";
import {ListItem} from "../list-item/list-item.component";
import {selectPokemons} from "../../redux/selectors/pokedex/pokedex.selector";
import "./pokemons-list-style.scss"
import {getPokemonsList} from "../../features/pokedex/pokedex.api";

const PokemonsList = ({pokedexes = {}}) => {
    const dispatch = useDispatch()

    const onPreviewBtnClick = async () => {
        if(pokedexes.previous) {
            const paramObject = getQueryParam(pokedexes.previous)
            await getPokemonsList(dispatch, {offset: paramObject})
        }
    }
    const onNextBtnClick = async () => {
        if(pokedexes.next) {
            const paramObject = getQueryParam(pokedexes.next)
            await getPokemonsList(dispatch, {offset: paramObject})
        }
    }

    const getQueryParam = (param) => {
        const paramString = param?.split('?')[1]
        const splittedParams = paramString.split('&')
        const paramOffset = splittedParams[0].split('=')[1]

        return parseInt(paramOffset)
    }

    return <div>
        <div>
            <button type="button" className="btn btn-info btn-primary" onClick={onPreviewBtnClick}>preview</button>
            <button type="button" className="btn btn-info btn-primary" onClick={onNextBtnClick}>next</button>
        </div>
        <ul className="pokemons-list">
            {pokedexes.results?.map(pokemon => {
                return  <ListItem key={pokemon.name}
                                  data={pokemon}
                />
            })}
        </ul>
    </div>

}

const mapStateToProps = createStructuredSelector ({
    pokedexes : selectPokemons
});

export default connect(mapStateToProps)(PokemonsList) ;
