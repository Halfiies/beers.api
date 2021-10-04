import './App.scss';
import { useState } from 'react';
import Main from './components/Main/Main';
import beers from './data/beers.js'
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';




const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(cleanInput);
  };
  const beerObj = beers.filter(beer => {
  const beerLower = beer.name.toLowerCase();
  return beerLower.includes(searchTerm);
  });
  return (
    <div className="App">
      <Navbar label={"beer-search"} searchTerm={searchTerm} handleInput={handleInput} />
      <Main beerArr ={beers}/>
      <Card beerInfo= {beerObj[0]}/>
    </div>
  );
}

export default App;
