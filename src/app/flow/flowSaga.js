import {takeLatest} from 'redux-saga';
import {put, select, take} from 'redux-saga/effects';
import {GO_TO_RACE, RESET_RACE} from './flowActions';
import {getRaceTitle, getGroups} from '../setup/setupSelectors';
import {initRace} from '../race/raceActions';

function* flowSaga() {
    yield* takeLatest([GO_TO_RACE], raceFlow);
}

export default flowSaga;

function* raceFlow() {
    const raceTitle = yield select(getRaceTitle);
    const groups = yield select(getGroups);

    yield put(initRace(raceTitle, groups));

    let raceInitialized = true;

    while (raceInitialized === true) {
        const action = yield take([
            RESET_RACE
        ]);

        switch (action.type) {
            case RESET_RACE:
                raceInitialized = false;
                break;
        }
    }
}