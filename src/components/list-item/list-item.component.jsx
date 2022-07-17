import React, { useState } from 'react';
import './list-item.style.scss'
import pokemonImage from "../../assets/images/002.png"

export function ListItem({data }) {
    return (
        <li className="list-item animating">
            <figure className="list-item__figure">
                <a className="list-item__figure-link" href={`/pokedex/name=${data.name}`}>
                    <img className="list-item__figure-link-image" src={pokemonImage} />
                </a>
            </figure>
            <div className="list-item__info">
                <h5 className="list-item__info-title">{data.name}</h5>
                <div className="list-item__info-abilities">
                    <span className="list-item__info-type list-item__info-ability--item">Poison</span>
                    <span className="list-item__info-evolution list-item__info-ability--item">Grass</span>
                </div>
            </div>
        </li>
    );
}
