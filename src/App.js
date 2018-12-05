import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/sections/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* this component explains the composition concept by adding inside of it multiple components */}
        {/* please remember to split the code into multiple components only when reused in multiple places */}
        {/* please remember to add sections which will provide custom business logic to each section */}
        {/* never add everything at app level */}
        <nav>
          Secciones
        </nav>

        <Home></Home>
        
        <footer>
          Copyright 2018
        </footer>
      </div>
    );
  }
}

export default App;
