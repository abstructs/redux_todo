import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
require('./tests') // runs our tests

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
