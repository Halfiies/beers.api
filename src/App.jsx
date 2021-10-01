import './App.scss';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import beers from './data/beers.js'
const beerByRatingArr = beer.filter(beer => beer)

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
