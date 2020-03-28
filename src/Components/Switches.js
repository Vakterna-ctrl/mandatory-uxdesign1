import React from 'react';
import '../App.css';

const Switches = () => {
  return (
    <>
    <label className="grayarea__switch">
    <input type="checkbox" className="grayarea__checkbox"/>
    <div className="grayarea__slider"></div>
    </label>

    <label className="grayarea__switch">
    <input type="checkbox" checked className="grayarea__checkbox"/>
    <div className="grayarea__slider"></div>
    </label>
    </>
  )
}

export default Switches;
