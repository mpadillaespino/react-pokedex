export const getShortStatNames = (longStatName) => {
    let shortStatName = ""
    switch (longStatName) {
        case "hp":
            shortStatName = "HP"; 
            break;
        case "attack":
            shortStatName = "Atk"; 
            break;
        case "defense":
            shortStatName = "Def"; 
            break;
        case "special-attack":
            shortStatName = "SpA"; 
            break;
        case "special-defense":
            shortStatName = "SpD"; 
            break;
        case "speed":
            shortStatName = "Spe"; 
            break;
        default:
            break;
    }
    return shortStatName
}

export const loaderProps = {
    color: '#FF4236',
    type: 'Oval',
    height: 120,
    width: '120',
}

export const socialNetworkIconStyle = {
    height: 35, 
    width: 35,
    marginLeft: 6,
    marginRight: 6,
    bgColor: '#000',
    fgColor: '#fff'
}

export const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    pyschic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}

export const getSwalErrorDialog = (message) => {
    return {
        icon: 'error',
        title: '¡Hubo un problema!',
        text: message,
        confirmButtonText: 'ACEPTAR',
    }
}