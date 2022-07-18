import React, {useEffect, useState} from 'react';
import {ListItem} from "../list-item/list-item.component";
import "./pokemons-list-style.scss"
import {getPokemonsQuery} from "../../features/pokedex/pokedex.api";
import {useLazyQuery} from "@apollo/client";

export function PokemonsList () {
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)
    const [getData, { loading, data }] = useLazyQuery(getPokemonsQuery(offset));

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setOffset(page * 150)
    }, [page])

    useEffect(() => {
        getData()
    }, [offset])

    const pokemons = data?.pokemon_v2_pokemon;

    const onPreviewBtnClick = async () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    const onNextBtnClick = async () => {
        setPage(page + 1)
    }

    return <div className="pokemons-list">
        <div className="pokemons-list__button-container">
            <button  className="pokemons-list__pagination-btn" onClick={onPreviewBtnClick} disabled={offset == 0}>{`<< preview`}</button>
            <button  className="pokemons-list__pagination-btn" onClick={onNextBtnClick} disabled={pokemons?.length == 0}>{`preview >>`}</button>
        </div>
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
    </div>
}
