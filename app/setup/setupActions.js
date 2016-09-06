export const SAVE_TITLE = 'SAVE_TITLE';
export const SAVE_GROUP = 'SAVE_GROUP';

export const ADD_GROUP = 'ADD_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

export function saveTitle(raceTitle) {
    return {
        type: SAVE_TITLE,
        payload: {
            raceTitle
        }
    };
}

export function saveGroup(groupNumber, nrOfTeams) {
    return {
        type: SAVE_GROUP,
        payload: {
            groupNumber,
            nrOfTeams
        }
    };
}

export function addGroup() {
    return {
        type: ADD_GROUP,
        payload: {}
    };
}

export function removeGroup() {
    return {
        type: REMOVE_GROUP,
        payload: {}
    };
}