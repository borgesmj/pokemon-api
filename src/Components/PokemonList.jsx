import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="pokemonList">
      {pokemonList.map((item) => (
        <PokemonCard name={item.name} url={item.url} key={item.name} />
      ))}
    </div>
  );
};

export default PokemonList;
