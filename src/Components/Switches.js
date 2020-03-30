import React from 'react';
import '../App.css';

const Switches = () => {
  return (
    <>
    <label className="grayarea__switch--active">
    <input id="hmpf" type="checkbox"  className="grayarea__checkbox grayarea__checkbox--click"  />
    <div for="hmpf "className="grayarea__slider grayarea__slider--focus" ></div>
    </label>

    <label className="grayarea__switch--disable">
    <input type="checkbox" disabled className="grayarea__checkbox"/>
    <div className="grayarea__slider"></div>
    </label>

    <label className="grayarea__switch--disable">
    <input type="checkbox" disabled checked className="grayarea__checkbox"/>
    <div className="grayarea__slider"></div>
    </label>
    </>
  )
}

export default Switches;
