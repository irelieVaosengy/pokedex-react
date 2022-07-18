import React from 'react';
import './list-item.style.scss'
import {Link} from "react-router-dom";

export function ListItem({data }) {
    const types = data.pokemon_v2_pokemontypes;

    return (
        <div className="list-item">
            <Link className="list-item__link"
                  to={{pathname: `/pokemon/${data.id}`}} >
                <h5 className="list-item__info-title">{data.name}</h5>
            </Link>
            <div className="list-item__Types">
                <label className="list-item__details-label">Types and evolutions</label>
                {
                    types?.map((type) => {
                        const typeEntity = type.pokemon_v2_type
                        const evolutions = typeEntity.pokemonV2PokemonevolutionsByPartyTypeId

                        return <span className="list-item__type-value" key={type.id}>
                            <span >{typeEntity.name}</span>
                            {
                                evolutions?.map(evolution => {
                                    const gender = evolution.pokemon_v2_gender
                                    const location = evolution.pokemon_v2_location

                                    return <span className="list-item__evolution-value" key={evolution.id}>{gender?.name} - {location?.name}</span>
                                })
                            }
                        </span>
                    })
                }
            </div>
        </div>
    );
}
