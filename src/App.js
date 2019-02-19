import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreComponent from './components/ScoreComponent';
import ConfigComponent from './components/ConfigComponent';
import QuestionCardList from './components/QuestionCardList';

class App extends Component {

  state = {
    questions : []
  };

  addNewQuestion = ()=>{
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy')
                .then((response) => {   
                    return response.json();
                    //this.questions.concat(response.json());
                }).then((json) => {
                  console.log(json.results);                
                });
  }

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
            <QuestionCardList/>
          </div>

          <button id="btnNewQ" type="button" className="btn btn-primary btn-lg btn-block" onClick={this.addNewQuestion}>New question</button>
        </div>
      </div>
    );
  }
}

export default App;
