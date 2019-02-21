import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreComponent from './components/ScoreComponent';
import ConfigComponent from './components/ConfigComponent';
import QuestionCardList from './components/QuestionCardList';

class App extends Component {

  state = {
    all_answers : [],
    correct_answer: "",
    question: ""
  };

  addNewQuestion = ()=>{
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy')
                .then((response) => {   
                    return response.json();
                }).then((json) => {
                  this.setState(prevState =>({
                    question : json.results[0].question,
                    correct_answer: json.results[0].correct_answer,
                    all_answers: json.results[0].incorrect_answers
                  }));    
                  //Shuffle the answers (incorrect plus correct one)                  
                 this.setState(({
                  all_answers: this.shuffle([...this.state.all_answers,this.state.correct_answer])
                 }));
                  
                });
  }

 shuffle = (array) => {
    let currentIndex = array.length,
        temporaryValue, randomIndex;
    console.log("Array inicial: " + array);
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
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
            <QuestionCardList answers={this.state.all_answers} canswer={this.state.correct_answer} nquestion={this.addNewQuestion}/>
          </div>
          <hr/>
          <button id="btnNewQ" type="button" className="btn btn-primary btn-lg btn-block" onClick={this.addNewQuestion}>New question</button>
        </div>
      </div>
    );
  }
}

export default App;
