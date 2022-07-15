import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

export default function App() {
  const [cities, setCities] = useState([]) // va guardando ({[Roma]}, {[London]}, ...)

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(recurso => {
      if(recurso.main !== undefined){

        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]); //va guardando los datos de las ciudades buscadas linea 10
      } else {
        alert("Ciudad no encontrada");
      }
    })
  }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(city => city.id !== id))
    }
    return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose} />
    </div>
  );

}
