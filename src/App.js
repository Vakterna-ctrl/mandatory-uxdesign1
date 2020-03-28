import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Textfield from './Components/textfield'
import Switches from './Components/Switches'
import Checkbox from './Components/Checkbox'
import Radiobutton from './Components/Radiobutton'


function App() {
  return (
    <div className="home">
    <Router>
    <header className="upper">
    <div className="upper__boxlink">
    <Link className="upper__boxlink--link" to="/textfield">Textfield</Link>
    <Link className="upper__boxlink--link" to="/Switches">Switch</Link>
    <Link className="upper__boxlink--link" to="/checkbox">Checkbox</Link>
    <Link className="upper__boxlink--link" to="/radiobutton">Radiobutton</Link>
    </div>
    </header>
    <section>
    <div className="grayarea">
    <Route path="/textfield" component={Textfield}/>
    <Route path="/Switches" component={Switches}/>
    <Route path="/checkbox" component={Checkbox}/>
    <Route path="/radiobutton" component={Radiobutton}/>


    </div>
    </section>
    </Router>

    </div>
  );
}

export default App;
