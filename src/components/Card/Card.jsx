import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
// formats data for display
const Card = (props) => {
  const { beerInfo } = props;

  return (
    <Link to={`/beersArr/${beerInfo.id}`} key={beerInfo.id}>
      <div className="card">
        <h3>{beerInfo.name}</h3>
        <h5>{beerInfo.tagline}</h5>
        <img src={beerInfo.image_url} alt={beerInfo.name}></img>
        <p>{beerInfo.first_brewed}</p>
        <p>{beerInfo.ph}</p>
      </div>
    </Link>
  );
};
export default Card;
