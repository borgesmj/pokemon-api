import React from 'react';

const Buttons = ({ changeNext, changePrevious, next, previous }) => {
  const handlePreviousClick = () => {
    changePrevious();
  };

  const handleNextClick = () => {
    changeNext();
  };

  const paginas = [
    {texto: 'pagina 1', value: 20},
    {texto: 'pagina 2', value: 40}
  ]

  return (
    <div className="BtnPanel">
      {previous && <button onClick={handlePreviousClick}>Previous</button>}
      {next && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
};

export default Buttons;
