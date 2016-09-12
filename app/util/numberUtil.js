import _ from 'lodash';

const NUMBER_REGEX = /[0-9]+/;

export const toInt = (number) =>
    parseInt(number, 10);

export const isValidNumber = (input) =>
    input.match(NUMBER_REGEX) !== null;

export const prefixWithZero = (number, nrOfDigits = 2) => (
    _.padStart(number, nrOfDigits, '0')
);