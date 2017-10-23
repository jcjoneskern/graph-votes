import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Graph from './graph';
import Buttons from './buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat1: 1,
      cat2: 2,
      cat3: 3
    };
  }

  render() {
    return (
      <div className="app">
        <Graph 
          cat1 = { this.state.cat1 }
          cat2 = { this.state.cat2 }
          cat3 = { this.state.cat3 }
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
