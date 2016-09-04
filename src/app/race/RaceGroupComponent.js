import React from 'react';
import {connect} from 'react-redux';
import {getTeamsOfGroup, isAtLeastOneChronoStartedOfGroup} from './raceSelectors';
import {startGroupChronos} from './raceActions';

const RaceGroupP = ({
    groupNumber, getTeams, isAtLeastOneChronoStarted,
    onStartGroupChronos
}) => {
    return (
        <div className="group">
            <b>Group {groupNumber}</b>&nbsp;
            <button className="btn btn-success"
                    disabled={isAtLeastOneChronoStarted(groupNumber)}
                    onClick={() => onStartGroupChronos(groupNumber)}>
                Start all chronos within group
            </button>
            <p>
                Number of teams:&nbsp;
                {getTeams(groupNumber).length}
            </p>
        </div>
    );
};

export default RaceGroupP;

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