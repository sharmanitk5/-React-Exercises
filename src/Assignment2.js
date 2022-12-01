import React from 'react'
import image from './img.webp';
export default function Assignment2({model,amount,percentage}) {
  return (
    <div className='container'>
      <img src={image}></img>
      <h2 className='mdl'>{model}</h2>
      <div className='amt'>{amount}</div>
    <div className='top'>
      <h1>{percentage}</h1>
      <div>SPEC</div>
      <div>SCORE</div>
    </div>


    </div>
  );
}
