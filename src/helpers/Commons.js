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