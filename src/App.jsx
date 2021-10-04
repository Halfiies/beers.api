import './App.scss';
import Main from './components/Main/Main';
import beers from './data/beers.js'
import SearchBeer from './Containers/HandleSearch/HandleSearch';

const App = () => {
  return (
    <div className="App">
      
     <Main beerArr ={beers}/>
     <SearchBeer beerArr={beers} />
    </div>
  );
}

export default App;
