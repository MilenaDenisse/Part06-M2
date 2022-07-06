import React from 'react';
import style from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className={style.fondo}>
      <main className={style.main}>
        <div className={style.mainCity}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
        </div>
        {/* <div className={style.mainCity}>
          <Card 
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
          </div> */}
        <div className={style.reelCity}>
          <Cards
            cities={data}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
