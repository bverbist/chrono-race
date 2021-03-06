/* global setInterval clearInterval */

import React from 'react';
import {connect} from 'react-redux';
import {
    getId, getNumber, getName,
    isChronoStarted, isChronoStopped,
    getStartTimestamp, getStopTimestamp
} from './teamSelectors';
import {saveTeamName, startTeamChrono, stopTeamChrono, resetTeamChrono} from '../raceActions';
import Chrono from '../chronometer/ChronoComponent';

const RaceTeamP = ({
    team,
    onSaveTeamName, onStartTeamChrono, onStopTeamChrono, onResetTeamChrono
}) => (
    <div className="team container">
        <div className="label team-number">{getNumber(team)}.</div>
        <input type="text"
               placeholder="team name"
               value={getName(team)}
               size="22"
               maxLength="20"
               onChange={(event) => onSaveTeamName(getId(team), event.target.value)} />
        <div className="chrono-actions">
            <button className="btn btn-success chrono-action"
                    disabled={isChronoStarted(team) && !isChronoStopped(team)}
                    onClick={() => onStartTeamChrono(getId(team))}>
                Start
            </button>
            <button className="btn btn-danger chrono-action"
                    disabled={isChronoStopped(team)}
                    onClick={() => onStopTeamChrono(getId(team))}>
                Stop
            </button>
            <button className="btn btn-primary chrono-action"
                    disabled={!isChronoStopped(team)}
                    onClick={() => onResetTeamChrono(getId(team))}>
                Reset
            </button>
            <Chrono startTimestamp={getStartTimestamp(team)}
                    stopTimestamp={getStopTimestamp(team)} />
        </div>
    </div>
);

const mapStateToProps = (/* state */) => ({});

const mapDispatchToProps = (dispatch) => ({
    onSaveTeamName: (teamId, teamName) =>
        dispatch(saveTeamName(teamId, teamName)),
    onStartTeamChrono: (teamId) =>
        dispatch(startTeamChrono(teamId)),
    onStopTeamChrono: (teamId) =>
        dispatch(stopTeamChrono(teamId)),
    onResetTeamChrono: (teamId) =>
        dispatch(resetTeamChrono(teamId))
});

const RaceTeam = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceTeamP);

export default RaceTeam;