import React from 'react';
import '../App.css';

const Textfield = () => {
  return (
    <>
    <div className="grayarea_div">
    <input id="first" required  className="grayarea__textfield" type="text"/>
    <label className="grayarea__textfield--click">hmmm</label>
    </div>
    <div className="grayarea__disabled">
    <input className="grayarea__textfield" disabled type="text"/>
    <label className="grayarea__textfield--click">disabled</label>
    </div>

    </>
  )
}

export default Textfield;
