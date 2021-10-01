import React, {useState} from "react";
import "./CardList.scss"
import Card from "../Card/Card";

const CardList = props => {
const [counter, setCounter] = useState(0);
const handleIncrement = () => {
  if (counter === imagesArr.length - 1) {
    setCounter(0);
  } else {
    setCounter(counter + 1);
  }
};

const handleDecrement = () => {
  if (counter === 0) {
    setCounter(imagesArr.length - 1);
  } else {
    setCounter(counter - 1);
  }
};
// counter needs to increment in 3s? or ones, but always displaying three
 return(
   <div className="card-grid">
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
   </div>
 )
}
export default CardList