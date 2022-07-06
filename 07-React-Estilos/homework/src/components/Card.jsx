import React from 'react';

import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.container}>
      <button onClick={props.onClose} className={style.cardBtn}>x</button>
      <h2 className={style.header}>{props.name}</h2>
      <div className={style.card}>
        <div>
          <p className={style.label}>MIN</p>
          <p className={style.value}>{props.min}</p>
        </div>
        <div >
          <p className={style.label}>MAX</p>
          <p className={style.value}>{props.max}</p>
        </div>
        <img className={style.imag} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Img not Found' />
      </div>
    </div>
  )
};