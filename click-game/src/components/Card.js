import React from "react";
import "./Card.css";
function Card(props) {
  console.log(props.url);
  return (
    <div className=" container col-md-3">
      <div style={{ backgroundColor: "grey" }} className="card-header">
        <img
          alt={props.name}
          src={props.image}
          id={props.id}
          onClick={() => props.shuffleScoreCard(props.id)}
          className="shuffleScore"
        />
      </div>
    </div>
  );
}

export default Card;
