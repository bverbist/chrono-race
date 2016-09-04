import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {isOnRacePage} from './raceSelectors';
import {startGroupChronos} from './raceActions';

const RaceP = ({isVisible}) => (
    <div className={isVisible ? 'jumbotron' : 'hidden'}>
        <div className="container">
            <h2>Race</h2>
        </div>
    </div>
);

RaceP.PropTypes = {
    isVisible: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isVisible: isOnRacePage(state)
});

const mapDispatchToProps = (dispatch) => ({
    onStartGroupChronos: (groupNumber) =>
        dispatch(startGroupChronos(groupNumber))
});

const Race = connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceP);

export default Race;
