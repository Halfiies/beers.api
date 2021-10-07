import React, { useState } from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
// displays the cards
const CardList = (props) => {
  const { beersArr } = props;
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
  // counter needs to increment in 3s? or ones, but always displaying three
  return (
    <div>
      <div className="carousel">
        <Card beerInfo={beersArr[counter]} />
        <Card beerInfo={beersArr[counter + 1]} />
        <Card beerInfo={beersArr[counter + 2]} />
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
};
export default CardList;
