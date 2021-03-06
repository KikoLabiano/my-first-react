import React, { Component } from 'react';

class AnswerCard extends Component {
  state={
    classes: ["card"]
  }
  checkAnswer = () =>{   
    //Check if the answer is correct
    if(this.props.canswer === this.props.text){
      this.setState(prevState => ({
        classes: [...prevState.classes, "correct"]
      }));
      this.props.updateScore({correct:1,incorrect:0});
    }
    else{
      this.setState(prevState => ({
        classes: [...prevState.classes, "incorrect"]
      }));      
      this.props.updateScore({correct:0,incorrect:1});
    }
    //Wait a second until parent newQuestion function is called
    setTimeout(()=>{
      //Reset class state
      this.setState({
        classes: ["card"]
      });
      //Call parent newQuestion function
      this.props.nquestion();
    },1000);
    
  } 

render(){  
        return(
            <div className="col-sm-6 cardA">
            <div className={this.state.classes.join(' ')} onClick={this.checkAnswer}>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{this.props.text}</p>
              </div>
            </div>
          </div>
        );
        }
      }
export default AnswerCard;