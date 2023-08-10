import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPokemonInfo(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemonCard">
      <img
        src={pokemonInfo.sprites.other['home'].front_default}
        alt={`${name} sprite`}
        />
        <h3>
          {name} <span>{pokemonInfo.id}</span>
        </h3>
      <h5>
        Type: <b>{pokemonInfo.types[0].type.name}</b>
      </h5>
    </div>
  );
};

export default PokemonCard;
