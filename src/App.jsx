import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import Screen from './Components/Screen';
import Error from './Components/Error'

function App() {
  const [endPoint, setEndPoint] = useState(Math.floor(Math.random() * 300));
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (endPoint !== '') {
      const url = `https://pokeapi.co/api/v2/pokemon/${endPoint}`;
      axios
        .get(url)
        .then((response) => {
          setPokemonData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setPokemonData(null);
        });
    } else {
      setPokemonData(null);
    }
  }, [endPoint]);

  return (
    <div className="App">
      {pokemonData ? (
        <Screen
          name={pokemonData.name}
          img={pokemonData.sprites.other.dream_world.front_default}
          type_one={pokemonData.types[0].type.name}
          type_two={
            pokemonData.types[1] ? pokemonData.types[1].type.name : null
          }
          stats={pokemonData.stats}
        />
      ) : (
        <Error/>
      )}
      <SearchBar setEndPoint={setEndPoint} endPoint={endPoint} />
    </div>
  );
}

export default App;
