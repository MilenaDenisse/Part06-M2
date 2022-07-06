import React from 'react';
import style from './SearchBar.module.css';
import { BiSearchAlt, BiBuildingHouse } from "react-icons/bi"

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={style.searchBar}>
      <BiBuildingHouse className={style.icon}/>
      <input className={style.input} placeholder="Ciudad..." />
      <button className={style.submit} type="submit">
        <BiSearchAlt />
      </button>
    </div>
  )
};

// Si pusiera...
// <button onClick={onSearch('Agregando ciudad...')}>Agregar</button>
// Automaticamente al cargar la pagina se ejecturaria esa funcion, lo que yo quiero es que al ingresar algo 
// en el campo de texto y haga click en "agregar", surja esa alerta.