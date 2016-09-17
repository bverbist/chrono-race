import React from 'react';

const SetupGroup = ({number, nrOfTeams, onSaveGroup}) => {
    const saveGroup = (newNrOfTeams) => {
        onSaveGroup(number, newNrOfTeams);
    };

    return (
        <div className="group">
            <p><span className="group-number">Group {number}:</span></p>
            <p>
                <span className="label">Number of teams:</span>
                <input type="number"
                       value={nrOfTeams}
                       min="1"
                       max="99"
                       onChange={(event) => saveGroup(event.target.value)} />
            </p>
        </div>
    );
};

export default SetupGroup;