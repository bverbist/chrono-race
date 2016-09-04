const NUMBER_REGEX = /[0-9]+/;

export const toInt = (number) =>
    parseInt(number, 10);

export const isValidNumber = (input) =>
    input.match(NUMBER_REGEX) !== null;