import React from 'react';

const SearchBar = ({ endPoint, setEndPoint }) => {
  const handleChange = (e) => {
    setEndPoint(e.target.value.toLowerCase()); // Corrected the method name to toLowerCase()
  };

  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        value={endPoint}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
