import React, { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
const SearchBeer = props => {
  const {beerArr} = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const beerObj = beerArr.filter(beer => {
    const beerLower = beer.name.toLowerCase();

    return beerLower.includes(searchTerm);
  });

  return (
    <>
      <SearchBar label={"beers"} searchTerm={searchTerm} handleInput={handleInput} />
      <Card beerInfo= {beerObj[0]}/>
    </>
  );
};

export default SearchBeer;