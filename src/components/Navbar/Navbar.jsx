import React from "react";
import "./Navbar.scss"

const Navbar = props => {
  const {text} = props
  return (
 <div className="navbar">
   <p>{text} </p>
  <input type="text" className="navbar__Search"></input>
  <input type="checkbox" className="navbar__Checkbox"></input>
  <input type="checkbox" className="navbar__Checkbox"></input>
  <input type="checkbox" className="navbar__Checkbox"></input>
 </div>
 )
}
export default Navbar