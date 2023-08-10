import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Search from './Components/Search';
import PokemonList from './Components/PokemonList';
import Buttons from './Components/Buttons';

function App() {
  const [endPoint, setEndPoint] = useState('');
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  );
  const [pokemonList, setPokemonList] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemonList(response.data.results);
      setData(response.data);
    });
  }, [url]);

  const next = data.next;
  const previous = data.previous;

  const changeNext = () => {
    setUrl(data.next);
  };

  const changePrevious = () => {
    setUrl(data.previous);
  };

  return (
    <div className="app">
      <Header />
      <Search endPoint={endPoint} setEndPoint={setEndPoint} />
      <PokemonList pokemonList={pokemonList} />
      <Buttons
        changeNext={changeNext}
        changePrevious={changePrevious}
        next={next}
        previous={previous}
      />
    </div>
  );
}

export default App;
