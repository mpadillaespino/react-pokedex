import React from "react";
import { getShortStatNames } from '../../helpers/commons'
import './style.css'


const Progressbar = ({ percentaje, statName, statValue }) => {
    return (
        <div>
            <p className="stat-name">{getShortStatNames(statName)}</p>
            <div className="main__div">
            <div className="child__div"
                 style={{ width: `${percentaje}%`}}>
                <span className="progressbar__text">
                    {statValue}
                </span>
            </div>
        </div>
        </div>
    )
}

export default Progressbar;