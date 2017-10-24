import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={() => props.onVote("cats")}>Cats</button>
            <button onClick={() => props.onVote("dogs")}>Dogs</button>
            <button onClick={() => props.onVote("both")}>Both</button>
        </div>
    );
}

export default Buttons;