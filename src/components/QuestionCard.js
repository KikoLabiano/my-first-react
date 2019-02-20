import React, { Component } from 'react';

class QuestionCard extends Component{

    render(props){
        return(
            <div className="col-sm-6 cardA">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{props}</p>
              </div>
            </div>
          </div>
        );
    }
}

export default QuestionCard;