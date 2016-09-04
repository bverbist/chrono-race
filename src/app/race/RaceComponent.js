import React from 'react';
import {connect} from 'react-redux';
import {isOnRacePage, getRaceTitle, getGroups} from './raceSelectors';
import RaceGroup from './group/RaceGroupComponent';

const RaceP = ({
    isVisible, raceTitle, groups
}) => (
    <div className={isVisible ? 'race' : 'hidden'}>
        <div className="jumbotron">
            <div className="container">
                <h2>Race '{raceTitle}'</h2>
                <p>You can start the chrono's of all teams within a group simultaneously.</p>
            </div>
        </div>
        <div className="container">
            {groups.map((group, index) =>
                <div className="row" key={index}>
                    <RaceGroup groupNumber={group.number} />
                    <hr className={index === groups.length - 1 ? 'hidden' : ''} />
                </div>
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    isVisible: isOnRacePage(state),
    raceTitle: getRaceTitle(state),
    groups: getGroups(state)
});

const mapDispatchToProps = (/* dispatch */) => ({});

const Race = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceP);

export default Race;