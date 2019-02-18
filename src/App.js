import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreComponent from './components/ScoreComponent';
import ConfigComponent from './components/ConfigComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreComponent/>
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <ConfigComponent/>
             
          </div>
        </div>
      </div>
    );
  }
}

export default App;
