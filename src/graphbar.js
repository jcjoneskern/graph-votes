import React from 'react';

const GraphBar = (props) => {
    let barHeight = {
        height: (props.value / props.total).toFixed(2)*100 + "%"
    }

    return (
        <div className="bar-container">
            <div className={`graph-bar ${props.label}`} style={barHeight}>
                { props.value }
            </div>
            <div className="graph-label">
                { props.label }
            </div>
        </div>
    );
}

export default GraphBar;