import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

const QuestionCardList = (props) => {
    return(
        <div>
            <div className="row">
            {console.log(props.answers)}
            {props.answers.map((questionCard,i) => <QuestionCard key={i} text={questionCard}/>)}
            </div>
        </div>
      );
    }

export default QuestionCardList;