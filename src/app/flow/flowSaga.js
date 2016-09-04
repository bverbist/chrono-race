import {takeLatest} from 'redux-saga';
import {put, select} from 'redux-saga/effects';
import {GO_TO_RACE} from './flowActions';
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
}