import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = (props) => {
  const { label, handleInput } = props;
  return (
    <div className="navbar">
      <SearchBar label={label} handleInput={handleInput} />
    </div>
  );
};
export default Navbar;
