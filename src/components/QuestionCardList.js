import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

const QuestionCardList = (props) => {
    return(
        <div>
            <div className="row">
            {/* {props.questions.map(questionCard => <QuestionCard key={questionCard.id} {...questionCard}/>)}  */}
            </div>
            <div className="row">
            </div>
        </div>
      );
    }

export default QuestionCardList;