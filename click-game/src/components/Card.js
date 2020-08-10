import React from "react";
import"./Card.css";

// function Card(props) {
//   return (
//     <div className="card text-center">
//       <div className="card-header">
//       <img alt={props.name} src={props.image} id={props.id}
//         onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
//       </div>
//       <div className="card-body">{props.children}</div>
//     </div>
//   );
// }

function Card(props) {
    return (
      <div class="col-md-4">
        <img alt={props.name} src={props.image} id={props.id}
          onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
        </div>
        
    );
  }

export default Card;

