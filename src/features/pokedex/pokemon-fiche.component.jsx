import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPokemonById} from "./pokedex.api";
import "./pokedex.style.scss"

export function PokemonFiche() {
    let { id } = useParams();
    const [data, setData] = useState({})

    const sprites = data.sprites
    const profileImage = sprites?.other?.home
    const abilities = data.abilities
    const gameIndices = data.game_indices
    const types = data.types
    const versions = sprites?.versions

    useEffect(() => {
        getPokemonById(id).then((response) => {
            console.log('response', response)
            setData(response)
        })
    }, [])

    const createSection = ({list = [], objectKey = '', label=''}) => {
        return <section className= {`pokemon-fiche__section pokemon-fiche__${objectKey}`} >
            <label>{label}</label> {
            list?.map(listItem => {
                const itemObject = listItem[objectKey]
                const name = itemObject?.name
                return <span
                    key={name}
                    className={`pokemon-fiche__section-item pokemon-fiche__section-item__${objectKey} ${name}`}
                >{name}</span>
            })
        }
        </section>
    }

    const evolutionImages = () => {
        let evolutionElements = []
        for( const evolutionKey in versions) {
            const evolutionItem = versions[evolutionKey]

            if( typeof evolutionItem == 'object') {
                let firstColorKey = Object.keys(evolutionItem)[0]
                const colorItem = evolutionItem[firstColorKey]
                const image = colorItem.front_default
                evolutionElements.push({image, generationName: evolutionKey})
            }
        }

        return evolutionElements
    }

    const evolutionImageList = evolutionImages()

    return (
        <div className="pokemon-fiche">
            <h3 className="pokemon-fiche__title">{data.name} #{data.id}</h3>
            <div className="pokemon-fiche__container">
                <section className="pokemon-fiche__profil">
                    <img className="pokemon-fiche__profile-image" src={profileImage?.front_default}/>
                </section>
                <div className="pokemon-fiche__details">
                    {createSection({list: abilities, objectKey: 'ability', label: 'abilities'})}
                    {createSection({list: gameIndices, objectKey: 'version', label: 'Game indices'})}
                    {createSection({list: types, objectKey: 'type', label: 'Types'})}
                    <section className="pokemon-fiche__section pokemon-fiche__weight">
                        <label>weight</label> {data.weight}
                    </section>
                </div>
                <section className="pokemon-fiche__section pokemon-fiche__evolution">
                    <label>Evolutions</label>
                    <div className="pokemon-fiche__evolution-container">
                        {
                            typeof versions == 'object' ?
                                evolutionImageList?.map((evolution, index) => {
                                    return <span key={evolution.generationName} className="pokemon-fiche__evolution-item">
                                        <img src={evolution.image} />
                                        <span className="pokemon-fiche__evolution-item-label">{evolution.generationName}</span>
                                        { index < evolutionImageList.length - 1 ? <span className="chevron"> -> </span> : ''}
                                    </span>
                                }) : ''
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}
