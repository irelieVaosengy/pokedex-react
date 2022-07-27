import React, {useEffect, useState} from 'react';
import {ListItem} from "../list-item/list-item.component";
import "./pokemons-list-style.scss"
import {getPokemonsQuery} from "../../features/pokedex/pokedex.api";
import {useLazyQuery} from "@apollo/client";

export function PokemonsList () {
    const defaultPagination = {
        perPage: 30,
        offset: 0,
        page: 1
    }
    const [pagination, setPagination] = useState(defaultPagination)
    const [getData, { loading, data }] = useLazyQuery(getPokemonsQuery(pagination));

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setPagination({...pagination, offset: (pagination.page -1) * pagination.perPage})
    }, [pagination.page])

    useEffect(() => {
        getData()
    }, [pagination.offset])

    const pokemons = data?.pokemon_v2_pokemon;
    const pokemonsTotalCount = data?.pokemon_v2_pokemon_aggregate?.aggregate?.count;
    const pageCount = pokemonsTotalCount / pagination.perPage;

    const onPreviewBtnClick = async () => {
        if(pagination.page > 0) {
            setPagination({...pagination, page: pagination.page -1})
        }
    }

    const onNextBtnClick = async () => {
        setPagination({...pagination, page: pagination.page + 1})
    }

    const goToPage = (event) => {
        setPagination({...pagination, page: parseInt(event.target.value)})
    }

    const createPaginationElement = ()=> {
        let buttons = []

        for(let index = 0 ; index < pageCount; index++) {
            buttons.push(<button key={index} value={index+1} className="pokemons-list__pagination-btn pokemons-list__pagination-btn--num" onClick={goToPage} disabled={pagination.page === index + 1}>{index + 1}</button>)
        }

        return buttons
    }

    return <div className="pokemons-list">
        {
            loading ? 'Loading...' : ''
        }
        <ul className="pokemons-list__list">
            { pokemons && pokemons.length > 0 ?
                pokemons.map(pokemon => {
                return  <ListItem key={pokemon.id}
                data={pokemon}
                />
            }) : <p> No result </p>
            }
        </ul>
        <div className="pokemons-list__button-container">
            <button  className="pokemons-list__pagination-btn" onClick={onPreviewBtnClick} disabled={pagination.page === 1}>{`<< preview`}</button>
            <span>{createPaginationElement()}</span>
            <button  className="pokemons-list__pagination-btn" onClick={onNextBtnClick} disabled={pagination.page >= pageCount}>{`preview >>`}</button>
        </div>
    </div>
}
