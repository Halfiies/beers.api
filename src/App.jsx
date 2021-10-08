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
  const [checkedPh, setCheckedPh] = useState(false);
  // handles search bar input
  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    const inputArr = input.split(" ");
    const cleanInput = inputArr.join("_");
    setSearchTerm(cleanInput);
  };
  //checkboxes
  const handleOnChange = (i) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === i ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  let additionalTerms = "";
  const createTerms = (array) => {
    array.forEach((term, i) => {
      if (term === true) {
        additionalTerms += searchCriteria[i].search;
      } else {
      }
    });
    return additionalTerms;
  };
  createTerms(checkedState);
  //handles ph checkbox input
  const handlePh = () => {
    setCheckedPh(!checkedPh);
  };
  useEffect(() => {
    // fixes problems with empty strings
    if (!searchTerm) {
      fetch(`https://api.punkapi.com/v2/beers?per_page=80&${additionalTerms}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    } else {
      // returns search results on keystrokes
      fetch(
        `https://api.punkapi.com/v2/beers?${additionalTerms}&per_page=80&beer_name=${searchTerm}?`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setBeers(data);
        });
    }
  }, [searchTerm, additionalTerms]);
  // filters beers by ph checkbox since no api parameters are available

  useEffect(() => {
    if (checkedPh) {
      return setBeers(beers.filter((beer) => beer.ph < 4 && beer.ph));
    } else if (!checkedPh) {
    }
  }, [checkedPh]);

  return (
    <div className="App">
      <Navbar
        label={"beer-search"}
        handleInput={handleInput}
        handleOnChange={handleOnChange}
        searchCriteria={searchCriteria}
        handlePh={handlePh}
      />
      <SearchResults beersArr={beers} />
    </div>
  );
};

export default App;
