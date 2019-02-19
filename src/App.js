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
            <div className="card text-center cardQClass" style={{width: "60rem"}}>
            <div className="card-body">
              <h5 className="card-title">Question</h5>
              <p className="card-text" id="cardQ"></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
