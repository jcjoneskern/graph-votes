import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Graph from './graph';
import Buttons from './buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: 0,
      dogs: 0,
      both: 0
    };
  }

  render() {
    return (
      <div className="app">
        <Graph 
          cats = { this.state.cats }
          dogs = { this.state.dogs }
          both = { this.state.both }
        />
        <Buttons onVote = { this.handleVote.bind(this) } />
      </div>

    );
  }

  handleVote(category) {
    this.setState((prevState) => ({
      [category]: prevState[category] + 1
    }));
  }
}

export default App;
