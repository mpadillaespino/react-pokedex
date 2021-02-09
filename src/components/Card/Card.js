import React from "react";
import typeColors from '../../helpers/typeColors'
import Progressbar from '../Progressbar/Progressbar'
import './style.css'


const Card = ({ pokemon }) => {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {pokemon.types.map((type,i) => {
                    return (
                        <div key={i} 
                            className="Card__type"
                            style={{backgroundColor: typeColors[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="Card__info">
                <div className="Card__data">
                    <p className="title">Peso</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Altura</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Habilidades</p>
                        {pokemon.abilities.map((ability, i) => {
                            return <p key={i}> {ability.ability.name} </p>
                        })}
                </div>
                <div className="Card__data">
                    <p className="title">Estadisticas</p>
                        {pokemon.stats.map((stat, i) => {
                            return <Progressbar 
                                        key={i} 
                                        percentaje={stat.base_stat * 100 / 255}
                                        statValue = {stat.base_stat}
                                        statName={stat.stat.name} />
                        })}
                </div>
            </div>
        </div>
    )
}

export default Card;