import React, {useState} from "react";
import "./SearchResults.scss"
import Card from "../Card/Card";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const SearchResults = props => {
const {beersArr} = props 
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
if (beersArr.length > 3){
 return(
 <div className="SearchResults">
   <div className="carousel">
     <Card beerInfo={beersArr[counter]}/>
     <Card beerInfo={beersArr[counter+1]}/> 
     <Card beerInfo={beersArr[counter+2]}/> 
  </div>
  <div className="arrows">
     <img src={leftArrow} alt="left arrow" onClick={handleDecrement} className="carousel__arrow carousel__arrow--left" />
     <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className="carousel__arrow carousel__arrow--right" />
  </div>
</div>
 )}
  else if (beersArr.length === 3){
   return (
  <div className="SearchResults">
    <div className="threeResults">
      <Card beerInfo={beersArr[0]}/>
      <Card beerInfo={beersArr[1]}/> 
      <Card beerInfo={beersArr[2]}/> 
  </div>
  </div>   
   )}
  else if (beersArr.length === 2){
  return (
  <div className="SearchResults">
    <div className="twoResults">
      <Card beerInfo={beersArr[0]}/>
      <Card beerInfo={beersArr[1]}/> 
    </div>
  </div>   
    )}
  else if (beersArr.length === 2){
    return (
    <div className="SearchResults">
      <div className="oneResult">
        <Card beerInfo={beersArr[0]}/>
      </div>
    </div>   
    )}
  else {
    <div className="SearchResults">
    <div className="noResults">
      <p>No Results Found</p>
    </div>
  </div>   
  }  
}  
   
export default SearchResults