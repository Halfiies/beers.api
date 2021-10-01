import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import beers from './data/beers.js'
const beerByRatingArr = beers.filter(beer => beer)

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Main  beerArr={beers}/>
    </div>
  );
}

export default App;
