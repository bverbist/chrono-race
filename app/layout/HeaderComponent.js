import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {resetRace} from '../flow/flowActions';

const HeaderP = ({onSetupNewRace}) => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <div className="navbar-brand">Chrono Race</div>
            </div>
            <div id="navbar">
                <div className="navbar-form navbar-right">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={onSetupNewRace}>
                        Setup new race
                    </button>
                </div>
            </div>
        </div>
    </nav>
);

HeaderP.PropTypes = {
    onSetupNewRace: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onSetupNewRace: () =>
        dispatch(resetRace())
});

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderP);

export default Header;
