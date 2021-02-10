import React from "react";
import './style.css'

const Navbar = () => {

    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <div className="navbar">
            <img src={imgUrl} alt="pokeapi-logo" className="nav-image" />
        </div>
    )
}

export default Navbar;