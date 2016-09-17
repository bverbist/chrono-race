/* global setInterval clearInterval */

import React from 'react';
import {getNumber, getName, getChronoTime} from './teamSelectors';

const FinishedTeam = ({team}) => (
    <div className="team finished container">
        <div className="label team-number">{getNumber(team)}.</div>
        <div className="team-name">{getName(team)}</div>
        <span className="chrono-meter">{getChronoTime(team)}</span>
    </div>
);

export default FinishedTeam;