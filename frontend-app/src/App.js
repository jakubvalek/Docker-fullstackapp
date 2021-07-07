import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Header} from "./Components/Header";
import {Home} from "./Components/Home";
import {Customer} from "./Components/Customer";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/customer'} className="nav-link">Customers</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/customer' component={Customer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
