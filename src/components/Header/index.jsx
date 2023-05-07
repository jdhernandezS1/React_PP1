import React from "react";
import { Routes, Route } from 'react-router-dom'
import { GridMovies } from '../Component';
import { Home } from "../Home";

export function NavBar() {
    return (
        <header>
            <h1>navbar</h1>
            {/* <Routes>
                <Route path="/" element={<Home/>} />
            </Routes> */}

            {/* <Link to={"/"}>Home</Link> */}
            {/* <Link to={"/videos"}>Videos</Link> */}

            {/* <Route path="/" element={Home}>
                <Route path="videos" element={GridMovies} />
            </Route> */}

        </header>
    );
}