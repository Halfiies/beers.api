import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
// formats data for display
const Card = (props) => {
  const { beerInfo } = props;

  return (
    <div className="card">
      <Link to={`/beers/${beerInfo.id}`}>
        <h3>{beerInfo.name}</h3>
        <h5>{beerInfo.tagline}</h5>
        <img src={beerInfo.image_url} alt={beerInfo.name}></img>
        <p>{beerInfo.first_brewed}</p>
        <p>{beerInfo.ph}ph</p>
      </Link>
    </div>
  );
};
export default Card;
