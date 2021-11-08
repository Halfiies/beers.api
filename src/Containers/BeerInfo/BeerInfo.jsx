import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import "./BeerInfo.scss";
export const BeerInfo = (props) => {
  const { beersArr } = props;
  const { beerId } = useParams();
  const currentBeerArr = beersArr.filter((beer) => {
    return beer.id == beerId;
  });
  const currentBeer = currentBeerArr[0];
  if (!currentBeer) {
    return <Redirect to="/" />;
  }
  const { name, tagline, description, abv } = currentBeer;

  return (
    <div className="beerInfo">
      <h3>{name}</h3>

      <h4>{tagline}</h4>
      <p>{description}</p>
      <p>{abv}%</p>
      <Link to="/">
        <p>Back</p>
      </Link>
    </div>
  );
};
