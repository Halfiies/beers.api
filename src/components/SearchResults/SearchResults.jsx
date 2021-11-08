import React, { useState } from "react";
import "./SearchResults.scss";
import Card from "../Card/Card";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import { useMediaQuery } from "react-responsive";

const SearchResults = (props) => {
  const { beersArr } = props;
  const isMobile = useMediaQuery({ query: "(min-width:1023px)" });
  //carousel logic
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    if (counter === beersArr.length - 3) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(beersArr.length - 3);
    } else {
      setCounter(counter - 1);
    }
  };

  if (beersArr.length > 3) {
    return (
      <div className="SearchResults">
        <div className="carousel">
          <Card beerInfo={beersArr[counter]} />
          {isMobile && <Card beerInfo={beersArr[counter + 1]} />}
          {isMobile && <Card beerInfo={beersArr[counter + 2]} />}
        </div>
        <div className="arrows">
          <img
            src={leftArrow}
            alt="left arrow"
            onClick={handleDecrement}
            className="carousel__arrow carousel__arrow--left"
          />
          <img
            src={rightArrow}
            alt="right arrow"
            onClick={handleIncrement}
            className="carousel__arrow carousel__arrow--right"
          />
        </div>
      </div>
    );
    // logic for no carousel
  } else {
    return (
      <div className="SearchResults">
        <div className="carousel">
          {beersArr && beersArr.length !== 0 ? (
            beersArr.map((beerInfo) => (
              <Card key={beerInfo.id + 1} beerInfo={beerInfo} />
            ))
          ) : (
            <p>No Results Found</p>
          )}
        </div>
      </div>
    );
  }
};

export default SearchResults;
