import React from 'react';
import FinishedTeam from './FinishedTeamComponent';
import {toInt} from '../../util/numberUtil';

class FinishedTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                groupNumber: ''
            }
        };

        this.changeGroupNumberFilter = this.changeGroupNumberFilter.bind(this);
    }

    getFinishedTeamsFiltered() {
        return this.props.finishedTeams
            .filter((team) => {
                if (this.isGroupNumberFilter()) {
                    return team.groupNumber === toInt(this.getGroupNumberFilter());
                }
                return true;
            });
    }

    getGroupNumberFilter() {
        return this.state.filter.groupNumber;
    }

    changeGroupNumberFilter(event) {
        this.setState({
            filter: {
                groupNumber: event.target.value
            }
        });
    }

    isGroupNumberFilter() {
        return this.getGroupNumberFilter() !== '';
    }

    isShowFilter() {
        return this.props.groups.length > 1;
    }

    render() {
        return (
            <div className="finished-teams">
                <div className={this.isShowFilter() ? 'filter' : 'hidden'}>
                    <span className="label">Group filter:</span>
                    <select value={this.getGroupNumberFilter()}
                            onChange={this.changeGroupNumberFilter}>
                        <option value="" >all</option>
                        {this.props.groups.map((group, index) =>
                            <option value={group.number} key={index}>{group.number}</option>
                        )}
                    </select>
                </div>
                <div className="teams finished">
                    {this.getFinishedTeamsFiltered().map((team, index) =>
                        <div className="row" key={index}>
                            <FinishedTeam team={team} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FinishedTeams;