import generateId from '../util/idGenerator';

export const NO_TIMESTAMP = null;

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
            stopTimestamp: NO_TIMESTAMP
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
