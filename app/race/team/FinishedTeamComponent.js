/* global setInterval clearInterval */

import React from 'react';
import {getNumber, getName, getChronoTime} from './teamSelectors';

const FinishedTeam = ({team}) => (
    <div className="team finished container">
        <span>{getNumber(team)}.</span>
        <span>{getName(team)}</span>
        <span className="chronometer">{getChronoTime(team)}</span>
    </div>
);

export default FinishedTeam;