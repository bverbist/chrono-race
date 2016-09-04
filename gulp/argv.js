/* global console */

import minimist from 'minimist';

export const argv = minimist(process.argv.slice(2));

console.log('Gulp arguments:');
console.dir(argv);

export function isTask(taskName) {
    return argv._.includes(taskName);
}
