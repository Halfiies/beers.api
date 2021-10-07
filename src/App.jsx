import "./App.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";
import searchCriteria from "./data/searchcriteria";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(searchCriteria.length).fill(false)
  );
  // handles search bar input
  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    const inputArr = input.split(" ");
    const cleanInput = inputArr.join("_");
    setSearchTerm(cleanInput);
  };
  //checkboxes
  const handleOnChange = (i) => {
    console.log("it works");
    const updatedCheckedState = checkedState.map((item, index) =>
      index === i ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    // fixes problems with empty strings
    if (searchTerm === "") {
      fetch(`https://api.punkapi.com/v2/beers?`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    } else {
      // returns search results on keystrokes
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}?`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <Navbar
        label={"beer-search"}
        handleInput={handleInput}
        handleOnChange={handleOnChange}
        searchCriteria={searchCriteria}
      />
      <SearchResults beersArr={beers} />
    </div>
  );
};

export default App;
