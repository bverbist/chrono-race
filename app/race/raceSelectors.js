import _ from 'lodash';
import {isChronoStarted, isChronoStopped} from './team/teamSelectors';

export const isOnSetupPage = (state) =>
    state.race.nrOfGroups === 0;

export const isOnRacePage = (state) =>
    !isOnSetupPage(state);

export const getRaceTitle = (state) =>
    state.race.title;

export const getNrOfGroups = (state) =>
    state.race.nrOfGroups;

export const getGroups = (state) => {
    const groups = [];
    for (let i = 1; i <= getNrOfGroups(state); i++) {
        groups.push({
            number: i
        });
    }
    return groups;
};

export const getTeams = (state) =>
    state.race.teams;

export const getTeamsOfGroup = (state) =>
    (groupNumber) => _.filter(getTeams(state), {groupNumber});

export const isAtLeastOneChronoStartedOfGroup = (state) =>
    (groupNumber) => _.findIndex(getTeams(state), (team) =>
        team.groupNumber === groupNumber && isChronoStarted(team)
    ) > -1;

export const getStoppedTeamsSortedOnAscendingChrono = (state) => {
    const stoppedTeams = _.filter(getTeams(state), (team) => isChronoStopped(team));
    return _.orderBy(stoppedTeams, ['chronoTime'], ['asc']);
};