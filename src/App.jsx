import { useState, useEffect } from "react";
import PokemonList from "./Component/PokemonList";
import axios from "axios";
import Pagination from "./Component/Pagination";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  useEffect(() => {
    let cancel;

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setPokemon(response.data.results.map((p) => p.name));
        setNextPageUrl(response.data.next);
        setPreviousPageUrl(response.data.previous);
        setIsLoding(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoding(false);
      });
    return () => {
      cancel;
    };
  }, [currentPageUrl]);

  if (isLoding) return <div className="loading">Loading Pokémon...</div>;
  function handleNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function handlePreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }
  return (
    <div className="app">
      <div className="app-header">
        <h1>Pokémon Explorer</h1>
      </div>
      <PokemonList pokemon={pokemon} />
      <Pagination
        handlePreviousPage={previousPageUrl ? handlePreviousPage : null}
        handleNextPage={nextPageUrl ? handleNextPage : null}
      />
    </div>
  );
};

export default App;
