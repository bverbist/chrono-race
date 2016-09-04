import React from 'react';
import {connect} from 'react-redux';
import {getId, getNumber} from './teamSelectors';
import {startTeamChrono, stopTeamChrono, resetTeamChrono} from '../raceActions';

const RaceTeamP = ({
    team,
    onStartTeamChrono, onStopTeamChrono, onResetTeamChrono
}) => (
    <div className="team">
        <span>{getNumber(team)}.</span>
        <div>
            <button className="btn btn-default"
                    onClick={() => onStartTeamChrono(getId(team))}>
                Start
            </button>
            <button className="btn btn-default"
                    onClick={() => onStopTeamChrono(getId(team))}>
                Stop
            </button>
            <button className="btn btn-default"
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