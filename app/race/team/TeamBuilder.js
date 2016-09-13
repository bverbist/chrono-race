import generateId from '../../util/idGenerator';
import {NO_TIMESTAMP} from '../../util/timeUtil';
import {NO_CHRONOTIME} from '../../util/chronoUtil';

class TeamBuilder {
    static aTeam() {
        return new TeamBuilder();
    }

    constructor() {
        this.res = {
            id: generateId(),
            groupNumber: -1,
            number: -1,
            name: '',
            startTimestamp: NO_TIMESTAMP,
            stopTimestamp: NO_TIMESTAMP,
            chronoTime: NO_CHRONOTIME
        };
    }

    withGroupNumber(groupNumber) {
        this.res.groupNumber = groupNumber;
        return this;
    }

    withNumber(number) {
        this.res.number = number;
        return this;
    }

    build() {
        return this.res;
    }
}

export default TeamBuilder;
