import {getCurrentDate} from './dateUtil';

export function dateToTimestamp(date) {
    return date.getTime();
}

export function getCurrentTimestamp() {
    return dateToTimestamp(getCurrentDate());
}
