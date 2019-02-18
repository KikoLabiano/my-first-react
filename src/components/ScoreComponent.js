import React, { Component } from 'react';

class ScoreComponent extends Component{
    render(){
        return(
            <div>
                <div className="card text-white bg-success mb-3 float-left" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Correct answers</div>
                    <div className="card-body card-body-counter">
                    <p className="card-text-counter" id="countCorrect">0</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3 float-right" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Incorrect answers</div>
                    <div className="card-body card-body-counter">
                    <p className="card-text-counter" id="countIncorrect">0</p>
                    </div>
                </div>
            </div>
        );
        }
    }

export default ScoreComponent;