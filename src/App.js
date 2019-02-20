import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreComponent from './components/ScoreComponent';
import ConfigComponent from './components/ConfigComponent';
import QuestionCardList from './components/QuestionCardList';

class App extends Component {

  state = {
    incorrect_answers : [],
    correct_answer: "",
    question: ""
  };

  addNewQuestion = ()=>{
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy')
                .then((response) => {   
                    return response.json();
                    //this.questions.concat(response.json());
                }).then((json) => {
                  this.setState(prevState =>({
                    question : json.results[0].question,
                    correct_answer: json.results[0].correct_answer,
                    incorrect_answers: json.results[0].incorrect_answers
                  }));       
                  console.log(json.results[0].incorrect_answers);
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
                  <p className="card-text" id="cardQ">{this.state.question}</p>
                </div>
            </div>
            <QuestionCardList ianswers={this.state.incorrect_answers} canswer={this.state.correct_answer}/>
          </div>

          <button id="btnNewQ" type="button" className="btn btn-primary btn-lg btn-block" onClick={this.addNewQuestion}>New question</button>
        </div>
      </div>
    );
  }
}

export default App;
