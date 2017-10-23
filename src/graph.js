import React, { Component } from 'react';
import GraphBar from './graphbar'

class Graph extends Component {
    render() {
        let total = this.props.cat1 + this.props.cat2 + this.props.cat3;

        return (
            <div className="graph">
                <GraphBar value={this.props.cat1} label="cat1" total={total} />
                <GraphBar value={this.props.cat2} label="cat2" total={total} />
                <GraphBar value={this.props.cat3} label="cat3" total={total} />
            </div>
        );
    }
}

export default Graph;