import './App.css';
import {Header} from "./Components/Header";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="container">
          <h2 className="ml-2">Welcome to React customer app!</h2>
          <Header/>
        </div>
    );
  }
}

export default App;
