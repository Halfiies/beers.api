import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = props => {
const {beerArr} = props
 return (
   <div className="main">
     <CardList beersArr={beerArr}/>
   </div>
 )
}
export default Main