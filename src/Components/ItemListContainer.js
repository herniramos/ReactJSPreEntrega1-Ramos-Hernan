import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1>{greeting}</h1>
      <p>Este es un ejemplo de un contenedor con un mensaje integrado.</p>
    </div>
  );
};

export default ItemListContainer;
