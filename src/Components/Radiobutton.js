import React from 'react';
import '../App.css';

const Radiobutton = () => {
  return (
    <>
    <label className="contain__radiobutton">
    <input type="radio" className="radio"/>
    <div className="redesigned__radio"></div>
    </label>
    <label className="contain__radiobutton">
    <input type="radio" checked className="radio"/>
    <div className="redesigned__radio"></div>
    </label>
    </>
  )
}

export default Radiobutton;
