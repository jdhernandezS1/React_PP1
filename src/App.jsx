import React from "react";
import { NavBar } from './components/Header/index'
import {  } from "./css/Header/nav.module.css";
import { GridMovies } from "./components/Component";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
export function App() {
    console.log(window.location.pathname);
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home/>
            break;
        case "/Movies":
            component = <GridMovies/>
            break;
        case "/About":
            component = <About/>
            break;
    }
    return (
        <>
            {<NavBar />}
            {component}
        </>
    );
}