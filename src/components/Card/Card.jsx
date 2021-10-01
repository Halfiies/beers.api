import React from "react";
import "./Card.scss"

const Card = props => {
 const {beerinfo} = props;
 const beercard = beerinfo.map((beer, index)=>(
   <div className="card" key={beer.name+(index+1)}>
   <h3>{beer.name}</h3>
   <h5>{beer.tagline}</h5>
   <img src={beer.image_url}></img>
   <p>{beer.description}</p>
   </div>  
 ));

 return (
    <>
    {beercard} 
    </>
 )
}
export default Card