import React from "react";
import { moviesTitle, hvrBounceIn } from "./css/moviesGrid.module.css";
import {Navbar} from './components/Header/index'


export function App() {
    return (
        <>
            {/* <NavBar /> */}
            <div className={moviesTitle}>
                <h2 className={moviesTitle + " " + hvrBounceIn} >
                    Nezfliz
                </h2>
            </div>
    </>
    );
}