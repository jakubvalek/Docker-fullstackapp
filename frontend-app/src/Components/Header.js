import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from "./Home";
import { Customer } from "./Customer";

export const Header = (props) => {
    return (
        <Router>
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
        </Router>
    );

};