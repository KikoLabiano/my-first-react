import React, { Component } from 'react';
import QuestionCard from './QuestionCard';

const QuestionCardList = (props) => {
    return(
        <div>
            <div className="row">
            {/* {console.log(props.ianswers)} */}
            {props.ianswers.map((questionCard,i) => <QuestionCard key={i} text={questionCard[i]}/>)}
            </div>
        </div>
      );
    }

export default QuestionCardList;