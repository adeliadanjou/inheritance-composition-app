import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/sections/Home'
import AboutUs from './components/sections/AboutUs'
//2. bring onboard the router-dom functionality
import { Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* this component explains the composition concept by adding inside of it multiple components */}
        {/* please remember to split the code into multiple components only when reused in multiple places */}
        {/* please remember to add sections which will provide custom business logic to each section */}
        {/* never add everything at app level */}
        <nav className="nav-style">
          <ul>
            {/* 3. we setup the links through the Link component */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>

        {/* 4. we add the switch component, which allows to use routes */}
        <Switch>
          {/* 5. we specify the paths and the related component to be rendered when the url gets satisfied */}
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={AboutUs}/>
        </Switch>

        <footer>
          Copyright 2018
        </footer>
      </div>
    );
  }
}

export default App;
