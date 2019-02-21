import React, { Component } from 'react';

class ConfigComponent extends Component{

constructor(props){
      super(props);
      this.trivia_category = React.createRef();
      this.trivia_difficulty = React.createRef();
      this.trivia_type = React.createRef();
}

    handleCategChange = (event)=>{
        this.props.onSelectCategory(event.target.value);    
    }
    handleDiffChange = (event)=>{
        this.props.onSelectDifficulty(event.target.value);
        //Refs not working??
        //this.props.onSelectDifficulty(this.trivia_difficulty.value);    
    }
    handleTypeChange = (event)=>{
        this.props.onSelectType(event.target.value);    
    }

    render(){
        return(
        <div>
            <label htmlFor="trivia_category">Select Category: </label>
            <select id="trivia_category" name="trivia_category" className="form-control" onChange={this.handleCategChange} ref={this.trivia_category}>
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>

            <br/>

            <label htmlFor="trivia_difficulty">Select Difficulty: </label>
            <select id="trivia_difficulty" name="trivia_difficulty" className="form-control" onChange={this.handleDiffChange}  ref={this.trivia_difficulty}>
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>

            <br/>

            <label htmlFor="trivia_type">Select Type: </label>
            <select id="trivia_type" name="trivia_type" className="form-control" onChange={this.handleTypeChange}  ref={this.trivia_type}>&gt;
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
            </select>

            <hr/>
        </div>
    );
    }
}

export default ConfigComponent;