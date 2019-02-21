import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

const QuestionCardList = (props) => {
    return(
        <div>
            <div className="row">
            {props.answers.map((questionCard,i) => <QuestionCard key={i} text={questionCard} canswer={props.canswer} nquestion = {props.nquestion}/>)}
            </div>
        </div>
      );
    }

export default QuestionCardList;