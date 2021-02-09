import React from "react";
import typeColors from '../../helpers/typeColors'
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
                    <p className="title">Titulo</p>
                    <p>valor</p>
                </div>
                <div className="Card__data">
                    <p className="title">Titulo</p>
                    <p>valor</p>
                </div>
                <div className="Card__data">
                    <p className="title">Titulo</p>
                    <p>valor</p>
                </div>
            </div>
        </div>
    )
}

export default Card;