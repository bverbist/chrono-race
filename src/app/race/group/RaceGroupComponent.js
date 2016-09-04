import React from 'react';
import {connect} from 'react-redux';
import {getTeamsOfGroup, isAtLeastOneChronoStartedOfGroup} from '../raceSelectors';
import {startGroupChronos} from '../raceActions';
import RaceTeam from '../team/RaceTeamComponent';

const RaceGroupP = ({
    groupNumber, getTeams, isAtLeastOneChronoStarted,
    onStartGroupChronos
}) => (
    <div className="group">
        <b>Group {groupNumber}</b>&nbsp;
        <button className="btn btn-success"
                disabled={isAtLeastOneChronoStarted(groupNumber)}
                onClick={() => onStartGroupChronos(groupNumber)}>
            Start all chronos within group
        </button>
        <div className="teams">
            {getTeams(groupNumber).map((team, index) =>
                <div className="row" key={index}>
                    <RaceTeam team={team} />
                </div>
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    getTeams: getTeamsOfGroup(state),
    isAtLeastOneChronoStarted: isAtLeastOneChronoStartedOfGroup(state)
});

const mapDispatchToProps = (dispatch) => ({
    onStartGroupChronos: (groupNumber) =>
        dispatch(startGroupChronos(groupNumber))
});

const RaceGroup = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceGroupP);

export default RaceGroup;