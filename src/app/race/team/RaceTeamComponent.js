/* global setInterval clearInterval */

import React from 'react';
import {connect} from 'react-redux';
import {getId, getNumber, isChronoStarted, isChronoStopped, getStartTimestamp, getStopTimestamp} from './teamSelectors';
import {startTeamChrono, stopTeamChrono, resetTeamChrono} from '../raceActions';
import Chrono from '../chronometer/ChronoComponent';

const RaceTeamP = ({
    team,
    onStartTeamChrono, onStopTeamChrono, onResetTeamChrono
}) => (
    <div className="team container">
        <span>{getNumber(team)}.</span>
        <div>
            <button className="btn btn-success"
                    disabled={isChronoStarted(team) && !isChronoStopped(team)}
                    onClick={() => onStartTeamChrono(getId(team))}>
                Start
            </button>
            <button className="btn btn-warning"
                    disabled={isChronoStopped(team)}
                    onClick={() => onStopTeamChrono(getId(team))}>
                Stop
            </button>
            <button className="btn btn-danger"
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