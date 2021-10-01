import React, {useState} from "react";
import "./CardList.scss"
import Card from "../Card/Card";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const CardList = props => {
const {beersArr} = props 
const [counter, setCounter] = useState(0);
const handleIncrement = () => {
  if (counter === beersArr.length - 1) {
    setCounter(0);
  } else {
    setCounter(counter + 1);
  }
};

const handleDecrement = () => {
  if (counter === 0) {
    setCounter(beersArr.length - 1);
  } else {
    setCounter(counter - 1);
  }
};
// counter needs to increment in 3s? or ones, but always displaying three
 return(
   <div className="carousel">
     <img src={leftArrow} alt="left arrow" onClick={handleDecrement} className="carousel__arrow carousel__arrow--left" />
     <Card beerInfo={beersArr[counter]}/> 
     <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className="carousel__arrow carousel__arrow--right" />
   </div>
 )
}
export default CardList