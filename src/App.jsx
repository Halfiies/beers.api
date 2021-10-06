import "./App.scss";
import { useState, useEffect } from "react";
// import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    console.log(input);
    const inputArr = input.split(" ");
    const cleanInput = inputArr.join("_");
    setSearchTerm(cleanInput);
    console.log(cleanInput);
  };

  useEffect(() => {
    if (searchTerm === "") {
      fetch(`https://api.punkapi.com/v2/beers?`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    } else {
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}?`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    }
  }, [searchTerm]);

  console.log(searchTerm);
  const beerObj = beers;
  return (
    <div className="App">
      <Navbar label={"beer-search"} handleInput={handleInput} />
      <SearchResults beersArr={beerObj} />
    </div>
  );
};

export default App;
