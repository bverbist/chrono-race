import React from 'react';
import {connect} from 'react-redux';
import {isOnRacePage, getRaceTitle, getGroups, getStoppedTeamsSortedOnAscendingChrono} from './raceSelectors';
import RaceGroup from './group/RaceGroupComponent';
import FinishedTeam from './team/FinishedTeamComponent';

const RaceP = ({
    isVisible, raceTitle, groups, finishedTeams
}) => (
    <div className={isVisible ? 'race' : 'hidden'}>
        <div className="jumbotron">
            <div className="container">
                <h2>Race '{raceTitle}'</h2>
                <p>You can start the chrono's of all teams within a group simultaneously.<br />
                    The finished teams will be displayed - and sorted by their time -
                    automatically at the bottom of the page.
                </p>
            </div>
        </div>
        <div className="container">
            {groups.map((group, index) =>
                <div className="row" key={index}>
                    <RaceGroup groupNumber={group.number} />
                    <hr className={index === groups.length - 1 ? 'hidden' : ''} />
                </div>
            )}
            <br />
            <h3>Finished teams</h3>
            {finishedTeams.map((team, index) =>
                <div className="row teams" key={index}>
                    <FinishedTeam team={team} />
                </div>
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    isVisible: isOnRacePage(state),
    raceTitle: getRaceTitle(state),
    groups: getGroups(state),
    finishedTeams: getStoppedTeamsSortedOnAscendingChrono(state)
});

const mapDispatchToProps = (/* dispatch */) => ({});

const Race = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceP);

export default Race;