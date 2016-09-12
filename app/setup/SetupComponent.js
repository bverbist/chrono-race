import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {isOnSetupPage} from '../race/raceSelectors';
import {getRaceTitle, getGroups, getNrOfGroups} from './setupSelectors';
import {saveTitle, addGroup, removeGroup, saveGroup} from './setupActions';
import {goToRace} from '../flow/flowActions';
import SetupGroup from './SetupGroupComponent';
import {isValidNumber, toInt} from '../util/numberUtil';

const SetupP = ({
    isVisible, isExactlyOneGroup, groups, raceTitle, isRaceStartable,
    onSaveTitle, onAddGroup, onRemoveGroup, onSaveGroup, onGoToRace
}) => (
    <div className={isVisible ? 'setup' : 'hidden'}>
        <div className="jumbotron">
            <div className="container">
                <h2>Setup</h2>
                <p>Choose the number of teams participating in the chrono race. Split them up
                    over multiple groups if not all teams start at the same time.<br />
                    After the setup is ok, go to the race page by clicking on 'Go to Race'.
                </p>
                <p>
                    Race title:&nbsp;
                    <input type="text"
                           value={raceTitle}
                           onChange={(event) => onSaveTitle(event.target.value)} />
                </p>
            </div>
        </div>
        <div className="container">
            {groups.map((group, index) =>
                <div className="row" key={index}>
                    <SetupGroup number={group.number}
                                nrOfTeams={group.nrOfTeams}
                                onSaveGroup={onSaveGroup} />
                </div>
            )}
            <div className="row">
                <button className="btn btn-success btn-lg"
                        onClick={onAddGroup}>
                    Add Group
                </button>
                <button className="btn btn-default btn-lg"
                        disabled={isExactlyOneGroup}
                        onClick={onRemoveGroup}>
                    Remove last Group
                </button>
            </div>
            <div className="row">
                <button className="btn btn-primary btn-lg"
                        disabled={!isRaceStartable}
                        onClick={onGoToRace}>
                    Go to Race
                </button>
            </div>
        </div>
    </div>
);

SetupP.PropTypes = {
    isVisible: PropTypes.bool.isRequired,
    isExactlyOneGroup: PropTypes.bool.isRequired,
    groups: PropTypes.array
};

const mapStateToProps = (state) => ({
    isVisible: isOnSetupPage(state),
    isExactlyOneGroup: getNrOfGroups(state) === 1,
    raceTitle: getRaceTitle(state),
    groups: getGroups(state),
    isRaceStartable: isValidRaceTitle(getRaceTitle(state)) && areGroupsValid(getGroups(state))
});

const mapDispatchToProps = (dispatch) => ({
    onSaveTitle: (raceTitle) =>
        dispatch(saveTitle(raceTitle)),
    onAddGroup: () =>
        dispatch(addGroup()),
    onRemoveGroup: () =>
        dispatch(removeGroup()),
    onSaveGroup: (groupNumber, nrOfTeams) =>
        dispatch(saveGroup(groupNumber, nrOfTeams)),
    onGoToRace: () =>
        dispatch(goToRace())
});

const Setup = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupP);

export default Setup;

function isValidRaceTitle(raceTitle) {
    return raceTitle.trim() !== '';
}

function areGroupsValid(groups) {
    const invalidGroups = _.filter(groups, (group) => isNrOfTeamsInvalidOrSmallerThanZero(group.nrOfTeams));
    return invalidGroups.length === 0;
}

function isNrOfTeamsInvalidOrSmallerThanZero(nrOfTeams) {
    if (!isValidNumber(nrOfTeams)) {
        return true;
    }
    return toInt(nrOfTeams) <= 0;
}