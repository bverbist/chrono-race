import {combineReducers} from 'redux';

import setupReducer from '../setup/setupReducer';
import raceReducer from '../race/raceReducer';

const reducers = combineReducers({
    setup: setupReducer,
    race: raceReducer
});

export default reducers;
