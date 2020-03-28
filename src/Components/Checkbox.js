import React from 'react';
import '../App.css';

const Checkbox = () => {
  return (
    <>
    <label className="container">
    <input className="checkbox "type="checkbox"/>
    <div className="checkmark"></div>
    </label>
    <label className="container">
    <input className="checkbox" checked type="checkbox"/>
    <div className="checkmark"></div>
    </label>
    </>
  )
}

export default Checkbox;
