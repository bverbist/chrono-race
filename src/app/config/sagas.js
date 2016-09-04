import {fork} from 'redux-saga/effects';
import flowSaga from '../flow/flowSaga';

export default function* sagas() {
    yield [
        fork(flowSaga)
    ];
}
