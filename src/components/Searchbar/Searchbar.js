import React, { useRef } from "react";
import './style.css'

const Searchbar = ({ searchPokemon }) => {
    const searchText = useRef()

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleClick()
        }
    }

    const handleClick = () => {
        const search = searchText.current.value.toLowerCase()
        if (!search) return;
        searchText.current.value = ""
        searchPokemon(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    type="text"
                    ref={searchText} 
                    placeholder="Buscar pokémon..."
                    onKeyPress={handleKeyPress} />
            </div>
            <div className="searchbar-btn">
                <button onClick={handleClick}></button>
            </div>
        </div>
    )
}

export default Searchbar;