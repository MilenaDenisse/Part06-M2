import React from 'react';

import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.container}>
      <button onClick={props.onClose} className={style.cardBtn}>x</button>
      <h3>{props.name}</h3>
      <div className={style.card}>
        <div>
          <p>MIN</p>
          <p>{props.min}</p>
        </div>
        <div>
          <p>MAX</p>
          <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Img not Found' />
      </div>
    </div>
  )
};