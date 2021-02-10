import React from "react";
import { typeColors } from '../../helpers/commons'
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
            <div className="Card__types">
                <div className="Card__basicdata">
                    <p className="Card__data__title">Peso</p>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
                <div className="Card__basicdata">
                    <p className="Card__data__title">Altura</p>
                    <p>{pokemon.height / 10} m</p>
                </div>
            </div>
            <div className="Card__info">
                <div className="Card__data">
                    <p className="Card__data__title">Habilidades</p>
                        {pokemon.abilities.map((ability, i) => {
                            return <li key={i}> {ability.ability.name} </li>
                        })}
                </div>
                <div className="Card__data">
                    <p className="Card__data__title">Estadísticas</p>
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