import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import "./Navbar.scss";
const Navbar = (props) => {
  const { label, handleInput, handleOnChange, handlePh, searchCriteria } =
    props;
  return (
    <div className="navbar">
      <SearchBar label={label} handleInput={handleInput} />
      {searchCriteria.map((criteria, i) => (
        <SearchCriteria
          key={criteria.id + i}
          text={criteria.text}
          value={criteria.id}
          handleOnChange={() => handleOnChange(i)}
        />
      ))}
      <SearchCriteria
        text={"Search for beers with a High Acidity (pH lower than 4)"}
        value={"ph"}
        handleOnChange={handlePh}
      />
    </div>
  );
};
export default Navbar;
