import {NO_TIMESTAMP} from '../../util/timeUtil';

export const getId = (team) =>
    team.id;

export const getNumber = (team) =>
    team.number;

export const getName = (team) =>
    team.name;

export const getStartTimestamp = (team) =>
    team.startTimestamp;

export const getStopTimestamp = (team) =>
    team.stopTimestamp;

export const isChronoStarted = (team) =>
    getStartTimestamp(team) !== NO_TIMESTAMP;

export const isChronoStopped = (team) =>
    getStopTimestamp(team) !== NO_TIMESTAMP;