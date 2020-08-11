
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";




class App extends Component {
  
  // Setting this.state.pups to the cards json array
  state = {
    pups,
    puppyIds: [],
    score: 0,
    topScore: 0,
  };

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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

  newScore = this.state.score;
  clickedPuppyIds = this.state.puppyIds;
  topScore = this.state.topScore;

  shuffleScoreCard = (id) => {
    this.randomPups = this.shuffle(this.state.pups);
    this.clickedPuppyIds = this.state.puppyIds;
    if(this.clickedPuppyIds.some(pupId => pupId === id))
    {
      this.newScore = 0;
      this.clickedPuppyIds=[];
    }
    else
    {
      this.newScore++;
      this.clickedPuppyIds.push(id);
      if(this.newScore > this.topScore)
        this.topScore = this.newScore;
    }
    this.setState(state => (
      {
        pups:this.randomPups,
        puppyIds:this.clickedPuppyIds,
        score: this.newScore,
        topScore: this.topScore,
      }));
  }
  
  render() {
    return (
      <div className="App">
        <header  style={{height:"100%"}}className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p style={{fontSize:"30px"}} className="App-intro text-center">
            Try not to click the same image twice!
          </p>
        </header>
        
        <Score score={this.state.score}
           topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.pups.map(puppy => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
        
    </div>
    );
  }

}

export default App;
