export const isOnSetupPage = (state) =>
    state.race.nrOfGroups === 0;

export const isOnRacePage = (state) =>
    !isOnSetupPage(state);

export const getRaceTitle = (state) =>
    state.race.title;

export const getTeams = (state) =>
    state.race.teams;
