import React, { Component } from 'react';

class GraphBar extends Component {
    render() {
        let barHeight = {
            height: (this.props.value / this.props.total).toFixed(2)*100 + "%"
        }

        return (
            <div className="bar-container">
                <div className="graph-bar" style={barHeight}>
                    { this.props.value }
                </div>
                <div className="graph-label">
                    { this.props.label }
                </div>
            </div>
        );
    }
}

export default GraphBar;