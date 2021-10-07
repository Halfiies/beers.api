import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import "./Navbar.scss";
// space for componenets that help sort and navigate the beers
const Navbar = (props) => {
  const { label, handleInput, handleOnChange, isChecked, searchCriteria } =
    props;
  return (
    <div className="navbar">
      <SearchBar label={label} handleInput={handleInput} />
      {searchCriteria.map((criteria, i) => (
        <SearchCriteria
          key={criteria.id + i}
          text={criteria.text}
          value={criteria.id}
          isChecked={isChecked}
          handleOnChange={() => handleOnChange(i)}
        />
      ))}
    </div>
  );
};
export default Navbar;
