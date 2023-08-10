import React from 'react';
import SearchIcon from './SearchIcon';

const Search = ({ endPoint, setEndPoint }) => {
  const handleInputChange = (e) => {
    setEndPoint(e.target.value);
  };
  return (
    <form>
      <div className="campo">
        <input
          type="text"
          id="busqueda"
          onChange={handleInputChange}
          value={endPoint}
          placeholder="Ingrese el numero o nombre..."
        />
        <label htmlFor="busqueda">
          <SearchIcon />
        </label>
      </div>
    </form>
  );
};

export default Search;
