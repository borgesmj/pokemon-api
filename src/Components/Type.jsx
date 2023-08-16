import React from 'react';

const Type = ({ type_one, type_two }) => {
  return (
    <div className={'type'}>
      <p className={type_one}>{type_one}</p>
      <p className={type_two}>{type_two}</p>
    </div>
  );
}

export default Type;
