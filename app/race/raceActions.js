export const INIT_RACE = 'INIT_RACE';

export const SAVE_TEAM_NAME = 'SAVE_TEAM_NAME';

export const START_TEAM_CHRONO = 'START_TEAM_CHRONO';
export const STOP_TEAM_CHRONO = 'STOP_TEAM_CHRONO';
export const RESET_TEAM_CHRONO = 'RESET_TEAM_CHRONO';

export const START_GROUP_CHRONOS = 'START_GROUP_CHRONOS';

export function initRace(raceTitle, groups) {
    return {
        type: INIT_RACE,
        payload: {
            raceTitle,
            groups
        }
    };
}

export function saveTeamName(teamId, teamName) {
    return {
        type: SAVE_TEAM_NAME,
        payload: {
            teamId,
            teamName
        }
    };
}

export function startTeamChrono(teamId) {
    return {
        type: START_TEAM_CHRONO,
        payload: {
            teamId
        }
    };
}

export function stopTeamChrono(teamId) {
    return {
        type: STOP_TEAM_CHRONO,
        payload: {
            teamId
        }
    };
}

export function resetTeamChrono(teamId) {
    return {
        type: RESET_TEAM_CHRONO,
        payload: {
            teamId
        }
    };
}

export function startGroupChronos(groupNumber) {
    return {
        type: START_GROUP_CHRONOS,
        payload: {
            groupNumber
        }
    };
}
