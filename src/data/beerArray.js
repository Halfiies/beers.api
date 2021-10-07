const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = usestate("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(cleanInput);
  };
  const fetchData = () => {
    fetch(`https://api.punkapi.com/v2/${searchTerm}/`)
      .then((data) => data.json())
      .then((beers) => {
        return setBeersArr(beers);
      });
    console.log(pokemon);
  };
  useEffect(fetchData, [searchTerm]);
  return (
    <div className="App">
      <Navbar label={"beer-search"} handleInput={handleInput} />
      <SearchResults beersArr={beersArr} />
    </div>
  );
};

// abv_gt=6
// brewed_before=01-2010
