import _ from 'lodash';
import {RESET_RACE} from '../flow/flowActions';
import {SAVE_TITLE, SAVE_GROUP, ADD_GROUP, REMOVE_GROUP} from './setupActions';

const FIRST_GROUP_NUMBER = 1;

const INITIAL_STATE = {
    raceTitle: '',
    groups: [
        createGroup(FIRST_GROUP_NUMBER)
    ]
};

const setupReducer = (state = INITIAL_STATE, action) => {
    if (!action.type || !action.payload) {
        return state;
    }

    switch (action.type) {
        case SAVE_TITLE: {
            const newState = _.cloneDeep(state);

            newState.raceTitle = action.payload.raceTitle;

            return newState;
        }

        case SAVE_GROUP: {
            const newState = _.cloneDeep(state);

            const group = getGroupByNumber(newState.groups, action.payload.groupNumber);
            group.nrOfTeams = action.payload.nrOfTeams;

            return newState;
        }

        case ADD_GROUP: {
            const newState = _.cloneDeep(state);

            const groupNr = getNextGroupNumber(newState.groups);
            newState.groups.push(
                createGroup(groupNr)
            );

            return newState;
        }

        case REMOVE_GROUP: {
            const newState = _.cloneDeep(state);

            newState.groups.pop();

            return newState;
        }

        case RESET_RACE: {
            return Object.assign({}, INITIAL_STATE);
        }

        default:
            return state;
    }
};

export default setupReducer;

function createGroup(number) {
    return {
        number,
        nrOfTeams: ''
    };
}

function getNextGroupNumber(groups) {
    return _.last(groups).number + 1;
}

function getGroupByNumber(groups, number) {
    return _.find(groups, {number});
}
