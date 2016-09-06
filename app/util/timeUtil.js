import {getCurrentDate} from './dateUtil';

export const NO_TIMESTAMP = null;

export function dateToTimestamp(date) {
    return date.getTime();
}

export function getCurrentTimestamp() {
    return dateToTimestamp(getCurrentDate());
}
