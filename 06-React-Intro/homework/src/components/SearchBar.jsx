import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input type="text" />
      <button onClick={() => onSearch('Agregando ciudad...')}>Agregar</button>
    </div>
  )
};

// Si pusiera...
// <button onClick={onSearch('Agregando ciudad...')}>Agregar</button>
// Automaticamente al cargar la pagina se ejecturaria esa funcion, lo que yo quiero es que al ingresar algo 
// en el campo de texto y haga click en "agregar", surja esa alerta.