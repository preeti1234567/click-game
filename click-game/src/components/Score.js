import React from "react";

const Score = props => (
  <div className="gameScore">
    <h3 className="score  badge-primary m-3 text-right">Your Score {props.score} : Top Score {props.topScore} </h3>    
  </div>
);

export default Score;