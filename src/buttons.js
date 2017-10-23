import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={() => props.onVote("cat1")}>Vote</button>
            <button onClick={() => props.onVote("cat2")}>Vote</button>
            <button onClick={() => props.onVote("cat3")}>Vote</button>
        </div>
    );
}

export default Buttons;