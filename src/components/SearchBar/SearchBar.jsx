import React from "react";

import "../SearchBar/SearchBar.scss"

const SearchBar = props => {
  const { label, searchTerm, handleInput } = props;

  return (
    <form className="search-bar">
      <label htmlFor={label} className="search-bar__label"> Search
      </label>
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-bar__input" />
    </form>
  );
};

export default SearchBar;