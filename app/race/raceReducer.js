import _ from 'lodash';
import {RESET_RACE} from '../flow/flowActions';
import {
    INIT_RACE,
    SAVE_TEAM_NAME,
    START_TEAM_CHRONO,
    STOP_TEAM_CHRONO,
    RESET_TEAM_CHRONO,
    START_GROUP_CHRONOS
} from './raceActions';
import mapToTeams from './group/groupsMapper';
import {getCurrentTimestamp, NO_TIMESTAMP} from '../util/timeUtil';
import {formatAsChronoTime, NO_CHRONOTIME} from '../util/chronoUtil';

const INCLUDE_EXACT_MILLIS = true;

const INITIAL_STATE = {
    title: '',
    nrOfGroups: 0,
    teams: []
};

const raceReducer = (state = INITIAL_STATE, action) => {
    if (!action.type || !action.payload) {
        return state;
    }

    switch (action.type) {
        case INIT_RACE: {
            const newState = _.cloneDeep(state);

            newState.title = action.payload.raceTitle;
            newState.nrOfGroups = action.payload.groups.length;
            newState.teams = mapToTeams(action.payload.groups);

            return newState;
        }

        case RESET_RACE: {
            return Object.assign({}, INITIAL_STATE);
        }

        case SAVE_TEAM_NAME: {
            const newState = _.cloneDeep(state);

            const team = getTeamById(newState.teams, action.payload.teamId);
            team.name = action.payload.teamName;

            return newState;
        }

        case START_TEAM_CHRONO: {
            const newState = _.cloneDeep(state);

            const team = getTeamById(newState.teams, action.payload.teamId);
            if (team.stopTimestamp === NO_TIMESTAMP) {
                team.startTimestamp = getCurrentTimestamp();
            } else {
                team.stopTimestamp = NO_TIMESTAMP;
                team.chronoTime = NO_CHRONOTIME;
            }

            return newState;
        }

        case STOP_TEAM_CHRONO: {
            const newState = _.cloneDeep(state);

            const team = getTeamById(newState.teams, action.payload.teamId);
            team.stopTimestamp = getCurrentTimestamp();
            team.chronoTime = formatAsChronoTime(team.startTimestamp, team.stopTimestamp, INCLUDE_EXACT_MILLIS);

            return newState;
        }

        case RESET_TEAM_CHRONO: {
            const newState = _.cloneDeep(state);

            const team = getTeamById(newState.teams, action.payload.teamId);
            team.startTimestamp = NO_TIMESTAMP;
            team.stopTimestamp = NO_TIMESTAMP;
            team.chronoTime = NO_CHRONOTIME;

            return newState;
        }

        case START_GROUP_CHRONOS: {
            const newState = _.cloneDeep(state);

            const groupTeams = getTeamsWithGroupNumber(newState.teams, action.payload.groupNumber);
            const startTimestamp = getCurrentTimestamp();

            _.forEach(groupTeams, (groupTeam) => {
                groupTeam.startTimestamp = startTimestamp;
            });

            return newState;
        }

        default:
            return state;
    }
};

export default raceReducer;

function getTeamById(teams, teamId) {
    return _.find(teams, {id: teamId});
}

function getTeamsWithGroupNumber(teams, groupNumber) {
    return _.filter(teams, {groupNumber});
}
