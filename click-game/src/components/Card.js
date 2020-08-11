import React from "react";
import  "./Card.css"
//import API from "./utils/API";

// class Cards extends Component {
//     state = {
//         search: "",
//         results: []
//       };
    
//       // When this component mounts, search the Giphy API for pictures of kittens
//       componentDidMount() {
//         this.searchGiphy("kittens");
//       }
    
//       searchGiphy = query => {
//         API.search(query)
//           .then(res => this.setState({ results: res.data.data }))
//           .catch(err => console.log(err));
//       };
// }


function Card(props) {
  return (
      <div className=" container col-md-3">
     <div style ={{backgroundColor: "grey"}}className="card-header">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
    
    
    

  );
}


export default Card;

