import React from 'react';
import {connect} from 'react-redux';
import {getId, getNumber, isChronoStarted} from './teamSelectors';
import {startTeamChrono, stopTeamChrono, resetTeamChrono} from '../raceActions';

const RaceTeamP = ({
    team,
    onStartTeamChrono, onStopTeamChrono, onResetTeamChrono
}) => (
    <div className="team container">
        <span>{getNumber(team)}.</span>
        <div>
            <button className="btn btn-success"
                    disabled={isChronoStarted(team)}
                    onClick={() => onStartTeamChrono(getId(team))}>
                Start
            </button>
            <button className="btn btn-warning"
                    disabled={!isChronoStarted(team)}
                    onClick={() => onStopTeamChrono(getId(team))}>
                Stop
            </button>
            <button className="btn btn-danger"
                    disabled={!isChronoStarted(team)}
                    onClick={() => onResetTeamChrono(getId(team))}>
                Reset
            </button>
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