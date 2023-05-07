import styles from '../css/moviesGrid.module.css'
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function NavBar({ movie }) {
    return (
        <Router>
            <header>
                <Link to={"/"}>Home</Link>
                <Link to={"/videos"}></Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/videos"> </Route>
                    <Route path="/"></Route>
                </Switch>
            </main>
        </Router>
    );
}