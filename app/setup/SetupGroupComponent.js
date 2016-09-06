import React from 'react';

const SetupGroup = ({number, nrOfTeams, onSaveGroup}) => {
    const saveGroup = (newNrOfTeams) => {
        onSaveGroup(number, newNrOfTeams);
    };

    return (
        <div className="group">
            <p><b>Group {number}:</b></p>
            <p>
                Number of teams:&nbsp;
                <input type="number"
                       value={nrOfTeams}
                       onChange={(event) => saveGroup(event.target.value)} />
            </p>
        </div>
    );
};

export default SetupGroup;