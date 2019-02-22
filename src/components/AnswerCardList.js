import React, { Component } from 'react';
import AnswerCard from './AnswerCard';

const AnswerCardList = (props) => {
    return(
        <div>
            <div className="row">
            {props.answers.map((answerCard,i) => <AnswerCard key={i} text={answerCard} canswer={props.canswer} nquestion = {props.nquestion} updateScore={props.onSelectedAnswer}/>)}
            </div>
        </div>
      );
    }

export default AnswerCardList;