import React from "react";
import "./Card.scss"

const Card = props => {
 const {beerInfo} = props;

 return (
   <div className="card">
   <h3>{beerInfo.name}</h3>
   <h5>{beerInfo.tagline}</h5>
   <img src={beerInfo.image_url} alt={beerInfo.name}></img>
   <p>{beerInfo.description}</p>
   </div>      
 )
}
export default Card