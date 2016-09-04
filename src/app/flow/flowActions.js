export const GO_TO_RACE = 'GO_TO_RACE';
export const RESET_RACE = 'RESET_RACE';

export function goToRace() {
    return {
        type: GO_TO_RACE,
        payload: {}
    };
}

export function resetRace() {
    return {
        type: RESET_RACE,
        payload: {}
    };
}
