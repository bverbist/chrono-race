import {prefixWithZero} from './numberUtil';

export const NO_CHRONOTIME = null;

export const getChronoTime = (hours = 0, minutes = 0, seconds = 0, millis = 0) =>
    `${prefixWithZero(hours)}`
    + `:${prefixWithZero(minutes)}`
    + `:${prefixWithZero(seconds)}`
    + `.${prefixWithZero(millis, 3)}`;

export const getNotStartedChronoTime = () =>
    getChronoTime(0, 0, 0, 0);

export const formatAsChronoTime = (startTimestamp, stopTimestamp, includeExactMillis = true) => {
    const elapsedMillis = stopTimestamp - startTimestamp;
    const elapsedSeconds = Math.floor(elapsedMillis / 1000);

    const millis = includeExactMillis ? elapsedMillis % 1000 : 0;
    const seconds = elapsedSeconds % 60;
    let minutes = Math.floor(elapsedSeconds / 60);
    let hours = 0;

    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes %= 60;
    }

    return getChronoTime(hours, minutes, seconds, millis);
};