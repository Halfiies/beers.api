import "./App.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";
import { BeerInfo } from "./Containers/BeerInfo/BeerInfo";
import searchCriteria from "./data/searchcriteria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);
  const [checkedState, setCheckedState] = useState(searchCriteria.map(criteria => criteria.isActive));
  const [checkedPh, setCheckedPh] = useState(false);
  
  const handleInput = event => {
    const input = event.target.value.toLowerCase();
    const inputArr = input.split(" ");
    const cleanInput = inputArr.join("_");
    setSearchTerm(cleanInput);
  };

  const handleOnChange = i => {
    const updatedCheckedState = checkedState.map((item, index) => (index === i ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    let URL = `https://api.punkapi.com/v2/beers?per_page=80`;

    checkedState.forEach((item, index) => {
      if (item) {
        URL += searchCriteria[index].search;
      }
    });

    if (searchTerm) {
      URL += `&beer_name=${searchTerm}`;
    }

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setBeersArr(data);
      });
  }, [checkedState, searchTerm]);

  const handlePh = () => {
    setCheckedPh(!checkedPh);
  };

  let filteredBeers = beersArr;

  if (checkedPh) {
    filteredBeers = beersArr.filter(beer => beer.ph < 4 && beer.ph);
  }

  return (
    <Router>
      <div className="App">
        <Navbar
          label={"beer-search"}
          handleInput={handleInput}
          handleOnChange={handleOnChange}
          searchCriteria={searchCriteria}
          handlePh={handlePh}
        />
        <Switch>
          <Route path="/beersArr/:BeerId">
            <BeerInfo beersArr={beersArr} />
          </Route>
          <Route path="/">
            <SearchResults beersArr={filteredBeers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
