import React from 'react';
import '../App.css';

const Checkbox = () => {
  return (
    <>
    <label className="container">
    <input className="checkbox "type="checkbox"/>
    <div className="checkmark checkmark--click"></div>
    </label>

    <label className="container">
    <input className="checkbox" disabled type="checkbox"/>
    <div className="checkmark checkmark--disable"></div>
    </label>

    <label className="container">
    <input className="checkbox" disabled checked type="checkbox"/>
    <div className="checkmark checkmark--disable"></div>
    </label>
    </>
  )
}

export default Checkbox;
