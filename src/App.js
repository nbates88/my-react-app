import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//everything in react is a component. each component returns exactly one DOM element. To return multiple, wrap in div
class App extends Component {

  constructor() {
    super();
    this.name = "Nic"
  }

  getVal() {
    return "Nichole Bates"
  }

  render() {
    const name = "Nichole";
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello, World!</h2>
          <h2>My name is {name}</h2>
          <h2>My nickname is {this.name}</h2>
        </div>
        <p className="App-intro">
          This is the React App of {this.getVal()}!
        </p>
      </div>
    );
  }
}

export default App;

