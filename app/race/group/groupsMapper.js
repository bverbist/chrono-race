import _ from 'lodash';
import TeamBuilder from '../team/TeamBuilder';
import {toInt} from '../../util/numberUtil';

function mapToTeams(groups) {
    const teams = [];
    let counter = 1;

    _.forEach(groups, (group) => {
        const nrOfTeams = toInt(group.nrOfTeams);
        for (let i = 0; i < nrOfTeams; i++) {
            const team = TeamBuilder.aTeam()
                .withGroupNumber(group.number)
                .withNumber(counter)
                .build();

            teams.push(team);

            counter++;
        }
    });

    return teams;
}

export default mapToTeams;
