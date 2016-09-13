import {getCurrentDate} from './dateUtil';

export const NO_TIMESTAMP = null;

export const dateToTimestamp = (date) =>
    date.getTime();

export const getCurrentTimestamp = () =>
    dateToTimestamp(getCurrentDate());