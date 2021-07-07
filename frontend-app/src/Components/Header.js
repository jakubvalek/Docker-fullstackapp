import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <ul className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Customers</a></li>
                    </ul>
                </ul>
            </div>
        </nav>
    );
};