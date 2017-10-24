import React from 'react';
import GraphBar from './graphbar'

const Graph = (props) => {
    let total = props.cats + props.dogs + props.both;

    return (
        <div className="graph">
            <GraphBar value={props.cats} label="cats" total={total} />
            <GraphBar value={props.dogs} label="dogs" total={total} />
            <GraphBar value={props.both} label="both" total={total} />
        </div>
    );
}

export default Graph;